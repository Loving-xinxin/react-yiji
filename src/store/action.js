// import { ADD_COMMENT } from '../store/actionTypes';
// const addComment = (newComment, val) => {
//   return dispatch => {
//     const newComment = {
//       content: this.state.val,
//       userId: '2',
//       author: '阿德',
//       avater:
//         'https://dev.tencent.com/u/Loving-xinxin/p/react-yiji/git/raw/master/assent/index-info-avater_11.png',
//       time: '2016.8.21'
//     };
//     dispatch({ type: ADD_COMMENT, newComment });
//   };
// };

// export { addComment };

// addComment = event => {
//   this.setState({
//     value: event.target.value
//   });
//   const newComment = {
//     content: this.state.value,
//     userId: '2',
//     author: '阿德',
//     avater:
//       'https://dev.tencent.com/u/Loving-xinxin/p/react-yiji/git/raw/master/assent/index-info-avater_11.png',
//     time: '2016.8.21'
//   };
//   const { id } = this.props.match.params;
//   const comments = this.props.show.find(item => item.id === id);
//   comments.info.comment.push(newComment);
// };
