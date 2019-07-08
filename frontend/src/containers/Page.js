import React, {PureComponent} from 'react';
import ConnectedDataProvider from "../containers/ConnectedDataProvider";

export default class AdminLeadsPage extends PureComponent {


    render() {

        return (
            <React.Fragment>
              <ConnectedDataProvider
                  {...this}
              />
            </React.Fragment>
        );
    }
}
