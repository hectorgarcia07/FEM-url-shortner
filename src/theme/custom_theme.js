import { createTheme } from '@mui/material/styles'

import BoostDesktopBG from '../../src/images/bg-boost-desktop.svg'
import BoostMobileBG from '../../src/images/bg-boost-mobile.svg'
import shortenDesktopBG from '../../src/images/bg-boost-mobile.svg'
import shortenMobileBG from '../../src/images/bg-boost-mobile.svg'

import iconBrand from '../../src/images/icon-brand-recognition.svg'
import iconDetailRecord from '../../src/images/icon-detailed-records.svg'
import facebookIcon from '../../src/images/icon-facebook.svg'
import customizableIcon from '../../src/images/icon-fully-customizable.svg'
import instagramIcon from '../../src/images/icon-instagram.svg'
import pinterestIcon from '../../src/images/icon-pinterest.svg'
import twitterIcon from '../../src/images/icon-twitter.svg'
import illustrationWorking from '../../src/images/illustration-working.svg'
import logo from '../../src/images/logo.svg'

const font =  "'Ubuntu', sans-serif";

export const custom_theme = createTheme({
    screenWidth: {
        values: {
            mobile: '375',
            desktop: '1440'
        }
    },
    colors: {
      primary: {
        cyan: 'hsl(180, 66%, 49%)',
        darkViolet: 'hsl(257, 27%, 26%)',
        red: 'hsl(0, 87%, 67%)'
      },
      neutral: {
        gray: 'hsl(0, 0%, 75%)',
        grayViolet: 'hsl(257, 7%, 63%)',
        darkBlue: 'hsl(255, 11%, 22%)',
        veryDarkBlue: 'hsl(260, 8%, 14%)',
      }
    },
    typography: {
        fontFamily: font,
        fontSize: '18',
    },
    background: {
        boost: {
            desktop: BoostDesktopBG,
            mobile: BoostMobileBG
        },
        shorten: {
            desktop: shortenDesktopBG,
            mobile: shortenMobileBG
        }
    },
    icons: {
      brandRecognition: iconBrand,
      detailedRecords: iconDetailRecord,
      facebook: facebookIcon,
      customizable: customizableIcon,
      instagram: instagramIcon,
      pintrest: pinterestIcon,
      twitter: twitterIcon,
      workingIcon: illustrationWorking,
      logo: logo
    }
  });