export const getQuestionOptions = ({
  optionOne: {
    text: optionOneText,
    votes: optionOneUsers
  },
  optionTwo: {
    text: optionTwoText,
    votes: optionTwoUsers
  }
}, withStats = false, answer) => {
  let stats = {}

  if (withStats) {
    const optionOneVotes = optionOneUsers.length
    const optionTwoVotes = optionTwoUsers.length
    const totalVotes = optionOneVotes + optionTwoVotes

    const answerText = answer === 'optionOne'
      ? optionOneText
      : optionTwoText

    stats = {
      optionOneVotes,
      optionTwoVotes,
      totalVotes,
      answerText
    }
  }

  return {
    optionOneText,
    optionTwoText,
    ...stats
  }
}
