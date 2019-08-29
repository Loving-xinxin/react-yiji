// import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import TabsNow from './Show';
// import TabsPrepare from './TabsPrepare';
// import { Tabs } from 'element-react';
// import './publicTabs.css';
// class PublicTabs extends Component {
//   state = {};
//   render() {
//     return (
//       <div className="publicTabs">
//         <Tabs activeName="2">
//           <Tabs.Pane label="正在展出" name="1">
//             <TabsNow tabsnow={this.props.tabsnow} />
//           </Tabs.Pane>
//           <Tabs.Pane label="即将展出" name="2">
//             <TabsPrepare tabsprepare={this.props.tabsprepare} />
//           </Tabs.Pane>
//         </Tabs>
//       </div>
//     );
//   }
// }
// const mapStateToProps = state => {
//   return {
//     show: state.show
//   };
// };
// export default connect(mapStateToProps)(PublicTabs);
