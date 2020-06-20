import { makeStyles, withStyles } from '@material-ui/core/styles'

export const useStyle = makeStyles((theme) => ({
  navbarSpace: {
    flexGrow: 1
  },
  questionCardBlock: {
    display: 'flex'
  },
  questionCardContent: {
    width: '65%'
  }
}))

export const withStyle = withStyles((theme) => ({
  loginContainer: {
    marginTop: '12%'
  },
  loginCard: {
    maxWidth: '68%',
    textAlign: 'center',
    margin: 'auto'
  },
  loginCardHeader: {
    color: theme.palette.primary.main
  },
  loginCardSubheader: {
    color: theme.palette.text.primary
  },
  logo: {
    width: 125,
    height: 125,
    margin: 'auto'
  },
  select: {
    textAlign: 'left'
  },
  loginButton: {
    textTransform: 'none'
  },
  navbarButton: {
    marginRight: theme.spacing(2),
    textTransform: 'none'
  },
  navbarGreetings: {
    textAlign: 'center'
  },
  questionListCardItem: {
    marginBottom: '2.5%'
  },
  questionListCardText: {
    display: 'inline',
    paddingLeft: '5%'
  },
  questionList: {
    width: '100%'
  },
  questionListTabs: {
    boxShadow: '0px 5px 5px -3px rgba(0,0,0,0.2),' +
    '0px 8px 10px 1px rgba(0,0,0,0.14),' +
    '0px 3px 14px 2px rgba(0,0,0,0.12)',
    marginTop: '5%',
    borderRadius: '4px'
  },
  indicator: {
    borderRadius: '4px',
    height: '100%',
    transition: 'none',
    zIndex: 50
  },
  wrapper: {
    textTransform: 'none',
    zIndex: 100
  },
  selected: {
    color: 'white'
  },
  questionListCard: {
    maxHeight: '500px',
    overflow: 'auto',
    marginTop: '2.5%'
  },
  questionCard: {
    marginTop: '5%'
  },
  questionCardMedia: {
    width: '35%'
  },
  questionAvatar: {
    width: '85%',
    height: 'auto',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)'
  },
  questionCardActions: {
    paddingTop: 0
  },
  questionNotFound: {
    marginTop: '10%'
  },
  questionResult: {
    width: '100%',
    marginTop: '5%'
  },
  questionResultCard: {
    width: '100%',
    padding: '5%'
  }
}))

export const styleProgress = (loading) => ({
  visibility: loading
    ? 'visible'
    : 'hidden'
})
