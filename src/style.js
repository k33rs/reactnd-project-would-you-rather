import { makeStyles, withStyles } from '@material-ui/core/styles'

export const useStyle = makeStyles((theme) => ({
  navbarSpace: {
    flexGrow: 1
  },
  flexBlock: {
    display: 'flex'
  },
  questionCardContent: {
    width: '65%'
  },
  questionResultBarContainer: {
    marginTop: '5%'
  },
  questionResultBarLabel: {
    position: 'absolute',
    width: '90%',
    height: '100%',
    maxHeight: '30px',
    zIndex: 2,
    display: 'flex',
    textAlign: 'center',
    alignItems: 'center',
    color: theme.palette.common.white,
    '& span': {
      width: '100%'
    }
  }
}))

export const withStyle = withStyles((theme) => ({
  loginCard: {
    marginTop: '16.5%',
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
    width: '40%',
    height: 'auto',
    margin: 'auto',
    marginTop: '2.5%'
  },
  select: {
    textAlign: 'left'
  },
  defaultButton: {
    textTransform: 'none'
  },
  navBar: {
    zIndex: 100
  },
  navbarButton: {
    marginRight: theme.spacing(2),
    textTransform: 'none'
  },
  textCenter: {
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
    borderRadius: '4px',
    zIndex: 1
  },
  indicator: {
    borderRadius: '4px',
    height: '100%',
    transition: 'none',
    zIndex: 1
  },
  wrapper: {
    textTransform: 'none',
    zIndex: 2
  },
  selected: {
    color: theme.palette.common.white
  },
  questionListCard: {
    maxHeight: '500px',
    overflow: 'auto',
    marginTop: '2.5%'
  },
  questionCard: {
    marginTop: '5%'
  },
  cardMedia: {
    width: '35%'
  },
  cardAvatar: {
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
  fullWidthTop: {
    width: '100%',
    marginTop: '5%'
  },
  questionResultCard: {
    width: '100%',
    padding: '5%'
  },
  questionResultBar: {
    height: '30px',
    borderRadius: '4px',
    zIndex: 1
  },
  newQuestionCard: {
    marginTop: '5%',
    marginLeft: 'auto',
    marginRight: 'auto',
    maxWidth: '80%'
  },
  newQuestionCardText: {
    marginTop: '2.5%',
    marginBottom: '2.5%'
  },
  newQuestionButton: {
    width: '96.25%',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: '1%',
    textTransform: 'none'
  },
  leaderCardBadge: {
    width: '100%',
    marginBottom: '2.5%',
    color: theme.palette.common.white
  },
  leaderCardBadgeColorOne: {
    backgroundColor: theme.palette.warning.light
  },
  leaderCardBadgeColorTwo: {
    backgroundColor: theme.palette.grey['400']
  },
  leaderCardBadgeColorThree: {
    backgroundColor: theme.palette.error.dark
  },
  leaderCardBadgeColorDefault: {
    backgroundColor: theme.palette.background.default
  },
  leaderCard: {
    width: '100%',
    display: 'flex'
  },
  leaderCardContent: {
    display: 'block',
    width: '70%'
  },
  leaderCardScore: {
    backgroundColor: theme.palette.action.hover
  }
}))

export const styleProgress = (loading) => ({
  visibility: loading ? 'visible' : 'hidden'
})
