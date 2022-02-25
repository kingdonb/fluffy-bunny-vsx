import React, { useContext } from "react";
import {
  DialogContent,
  DialogActions,
  Button,
  IconButton,
  Grid,
  Badge
} from "@material-ui/core";
import SettingsIcon from "@material-ui/icons/Settings";

import { DialogTitle, DialogContainer } from '@vscode-marquee/dialog';
import { BetterComplete } from '@vscode-marquee/utils';

import TrendContext from "../Context";
import { sinceOptions, trendLanguages, spokenLanguages } from "../constants";
import type { Since, SpokenLanguage } from '../types';

function getOptionSelected (defaultOption: { name: string }) {
  return (option: SpokenLanguage, value: SpokenLanguage) => {
    if (!value) {
      return defaultOption.name === option.name;
    };
    return option.name === value.name;
  };
}

const SpokenLanguageOption = () => {
  const { spoken, _updateSpoken } = useContext(TrendContext);
  const value = (spoken && spokenLanguages.find((s) => s.name === spoken)) || '';

  return (
    <Grid
      container
      direction="row"
      justifyContent="flex-start"
      alignItems="center"
      spacing={2}
    >
      <Grid item xs={3}>
        Spoken language
      </Grid>
      <Grid item xs>
        <BetterComplete
          variant="filled"
          field="spoken-language"
          label="Selection..."
          options={spokenLanguages}
          display="name"
          value={value}
          getOptionSelected={getOptionSelected(spokenLanguages[0])}
          onChange={(e: any, v: SpokenLanguage) => _updateSpoken(v)}
        />
      </Grid>
    </Grid>
  );
};

const ProgrammingLanguageOption = () => {
  const { language, _updateLanguage } = useContext(TrendContext);
  const value = (language && trendLanguages.find((s) => s.name === language)) || '';

  return (
    <Grid
      container
      direction="row"
      justifyContent="flex-start"
      alignItems="center"
      spacing={2}
    >
      <Grid item xs={3}>
        Programming language
      </Grid>
      <Grid item xs>
        <BetterComplete
          variant="filled"
          field="programming-language"
          label="Selection..."
          options={trendLanguages}
          display="name"
          value={value}
          getOptionSelected={getOptionSelected(trendLanguages[0])}
          onChange={(e: any, v: SpokenLanguage) => _updateLanguage(v)}
        />
      </Grid>
    </Grid>
  );
};

const SinceOption = () => {
  const { since, _updateSince } = useContext(TrendContext);
  const value = (since && sinceOptions.find((s) => s.name === since)) || '';

  return (
    <Grid
      container
      direction="row"
      justifyContent="flex-start"
      alignItems="center"
      spacing={2}
    >
      <Grid item xs={3}>
        Time Span
      </Grid>
      <Grid item xs>
        <BetterComplete
          variant="filled"
          field="since"
          label="Since..."
          options={sinceOptions}
          display="name"
          value={value}
          getOptionSelected={getOptionSelected(sinceOptions[0])}
          onChange={(e: any, v: Since) => _updateSince(v)}
        />
      </Grid>
    </Grid>
  );
};

const GithubTrendingDialog = React.memo(({ close }: { close: () => void }) => {
  return (
    <DialogContainer fullWidth={true} onClose={close}>
      <DialogTitle onClose={close}>Github Settings</DialogTitle>
      <DialogContent dividers={true}>
        <Grid container direction="column" spacing={2}>
          <Grid item xs>
            <ProgrammingLanguageOption />
          </Grid>
          <Grid item xs>
            <SinceOption />
          </Grid>
          <Grid item xs>
            <SpokenLanguageOption />
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions>
        <Button onClick={close} variant="contained" color="primary">
          Close
        </Button>
      </DialogActions>
    </DialogContainer>
  );
});

const TrendingDialogLauncher = () => {
  const { language, since, spoken, showDialog, setShowDialog } = useContext(TrendContext);

  /**
   * show badge if settings are changed from default
   */
  const badgeContent = (since || spoken || language)
    ? 1
    : 0;

  return (
    <>
      <IconButton onClick={() => setShowDialog(true)} size="small">
        <Badge
          color="secondary"
          variant="dot"
          overlap="circular"
          badgeContent={badgeContent}
        >
          <SettingsIcon fontSize="small" />
        </Badge>
      </IconButton>
      { showDialog && ( <GithubTrendingDialog close={() => setShowDialog(false)} /> )}
    </>
  );
};

export default TrendingDialogLauncher;