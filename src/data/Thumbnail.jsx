import React from 'react';

const DataList = ({ DataName }) => {
    console.log(DataName)
    return (
       <div>
        {DataName && DataName.themes.map(data => {
            return (<div>
                {data.name}
            </div>);
        })}
               hr
          
       </div>
    );
};

export default DataList;