import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Link } from '@material-ui/core';
import { TextDecrypt } from '../content/TextDecrypt';

import ResumeESP_PDF from './../../assets/CV_Spanish.pdf';
import ResumeENG_PDF from './../../assets/CV_English.pdf';

import {
  ResumeIcon
} from '../content/ResumeButton';

const useStyles = makeStyles((theme) => ({
  footerText: {
    position: 'fixed',
    bottom: theme.spacing(6),
    left: theme.spacing(6),
    '&:hover': {
      color: theme.palette.primary.main,
    },
    transition: 'all 0.5s ease',
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  
}));

export const Resume = () => {
  const classes = useStyles();

  return (
    <Link
      color='inherit'
      underline='none'
      href= {`${ResumeESP_PDF}`}
      target='_blank'
      rel='noopener noreferrer'
      className={classes.footerText}
    >
      <ResumeIcon />
      <Typography component='span'>
        <TextDecrypt text={'Descargar CV'} />
      </Typography>
    </Link>
  );
};
