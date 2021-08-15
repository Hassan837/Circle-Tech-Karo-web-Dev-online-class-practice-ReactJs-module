import React from 'react';

// function ListItem(props) {
  
  
//   return (
//     <div >
//       This is a child list item
//     <div>this parent component's child{props.name}</div>
//     </div>
//   );
// }

class ListItem extends React.Component {
  render() {
    return (
         < >
           
        <div>this parent component's child{this.props.name}</div>
          </>
         );
      
  }
}



export default ListItem;
