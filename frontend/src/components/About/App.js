import React from "react";

import BaseLayout from '../Base/BaseLayout'

export class About extends React.Component {

    success() {
        this.props.addNotification('Éxito!', 'Notificación creada', 'success')
        this.props.addNotification('Error!', 'no se pudo', 'danger')
    }

    render() {

        return (
        <BaseLayout title='About'>
            <button onClick={this.success.bind(this)} className="btn btn-primary">
            Add Awesome Notification
            </button>
        </BaseLayout>
    );
    }
}
