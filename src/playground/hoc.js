import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => {
    return ( 
    <div>
        <h1>Info</h1>
        <p>The info is: {props.info} </p>
    </div>
    )
};

const withAdminWarning = (WrappedComponent) => {
    return (props) => (
        <div>
            { props.isAdmin &&  <p>This is private info. Please don't share!</p>}
            <WrappedComponent {...props} />
        </div>
    );
};

const requireAuthentication = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAuthentificated ? ( <WrappedComponent {...props} /> 
                ) : (
                    <p>please login</p>
            )}
          
        </div>
    );
};

const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info);
//if it's false : please login 

ReactDOM.render(<AuthInfo isAuthentificated={true} info="COMPO INFO" />,document.getElementById('app'));