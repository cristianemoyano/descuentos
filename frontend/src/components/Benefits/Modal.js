import React, { Component } from "react";
import {
    Card,
    CardImg,
    CardText,
    CardBody,
    CardTitle,
    CardSubtitle,
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    CardLink,
    CardHeader,
    Row,
    Col,
    Container,
} from "reactstrap";


export default class CustomModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeItem: this.props.activeItem,
            nestedModal: false,
            qrModal: false,
        };
        this.toggleNested = this.toggleNested.bind(this);
        this.toggleQrModal = this.toggleQrModal.bind(this);
        this.clossAll = this.clossAll.bind(this);
    }

    toggleNested() {
        this.setState({
            nestedModal: !this.state.nestedModal,
            closeAll: false
        });
    }

    toggleQrModal() {
        this.setState({
            nestedModal: !this.state.nestedModal,
            qrModal: !this.state.qrModal,
            closeAll: false
        });
    }

    clossAll() {
        this.setState({
            nestedModal: false,
            qrModal: false,
        });
    }
    
    

    handleChange = e => {
        let { name, value } = e.target;
        if (e.target.type === "checkbox") {
            value = e.target.checked;
        }
        const activeItem = { ...this.state.activeItem, [name]: value };
        this.setState({ activeItem });
    };
    render() {
        const { toggle, onSave } = this.props;

        return (
            <Modal 
                isOpen={true}
                toggle={toggle}
                centered={true}
                size='md'
                scrollable={true}
                fade={true}
            >
            <ModalHeader toggle={toggle}> {this.state.activeItem.title} </ModalHeader>
            <ModalBody>
                <Row>
                    <Card>
                        <CardImg
                            top
                            width="100%"
                            src={this.state.activeItem.commerce_address.commerce.logo_url}
                            alt={this.state.activeItem.commerce_address.commerce.title}
                        />
                        <CardHeader>
                            {this.state.activeItem.commerce_address.commerce.title}
                            <br/>
                            <small className="text-muted">
                                {this.state.activeItem.commerce_address.commerce.category.title}
                            </small>
                        </CardHeader>
                        <CardBody>
                            <CardLink  href={this.state.activeItem.commerce_address.commerce.website}>Website</CardLink>
                            <CardLink href={this.state.activeItem.commerce_address.commerce.twitter}>Twitter</CardLink>
                            <CardLink href={this.state.activeItem.commerce_address.commerce.facebook}>Facebook</CardLink>
                            <CardLink href={this.state.activeItem.commerce_address.commerce.instagram}>Instagram</CardLink>
                            <CardTitle>{this.state.activeItem.title}</CardTitle>
                            <CardSubtitle>
                            <small className="text-muted">
                                {this.state.activeItem.benefit_type.title}
                            </small>
                            </CardSubtitle>
                            <CardText>{this.state.activeItem.description}</CardText>
                            <Container>
                                <Row className="text-center">
                                    <Col>
                                        <Button color="success" onClick={this.toggleNested}>¡Obtener beneficio!</Button>
                                    </Col>
                                </Row>
                            </Container>
                        </CardBody>
                        <CardHeader>
                            <p>
                                {this.state.activeItem.commerce_address.address_one}
                                <br/>
                                <small className="text-muted">
                                    {this.state.activeItem.commerce_address.address_two}
                                    {this.state.activeItem.commerce_address.city}
                                    <br/>
                                    {this.state.activeItem.commerce_address.state}
                                    <br/>
                                    {this.state.activeItem.commerce_address.commerce.phone}
                                </small>
                            </p>
                        </CardHeader>
                    </Card>
                    
                    <Modal centered={true} isOpen={this.state.nestedModal} toggle={this.toggleNested} onClosed={this.state.closeAll ? this.toggle : undefined}>

                        <ModalBody>
                            <Container>
                                <Row className="text-center">
                                    <Col>
                                        <b>{this.state.activeItem.title} - {this.state.activeItem.description}</b>
                                        <br/>
                                        <small className="text-muted">
                                            Para canjear este beneficio deberás escanear el código QR en el comercio.
                                        </small>
                                    </Col>
                                </Row>
                            </Container>
                        </ModalBody>
                        <ModalFooter>
                            <Container>
                                <Row className="text-center">
                                    <Col>
                                    <Button color="primary" onClick={this.toggleQrModal}>Abrir QR</Button>
                                    <Button color="default" onClick={this.toggleNested}>Lo haré luego</Button>
                                    </Col>
                                </Row>
                            </Container>
                        </ModalFooter>
                    </Modal>

                    <Modal centered={true} isOpen={this.state.qrModal} toggle={this.toggleQrModal} onClosed={this.state.closeAll ? this.toggle : undefined}>

                        <ModalBody>
                            <Container>
                                <Row className="text-center">
                                    <Col>
                                    <small className="text-muted">
                                        Escaneá este QR en el comercio y ganá puntos.
                                    </small>
                                    <CardImg
                                        top
                                        width="100%"
                                        src="https://upload.wikimedia.org/wikipedia/commons/d/d7/Commons_QR_code.png"
                                        alt={this.state.activeItem.commerce_address.commerce.title}
                                    />
                                    </Col>
                                </Row>
                            </Container>
                        </ModalBody>
                        <ModalFooter>
                            <Container>
                                <Row className="text-center">
                                    <Col>
                                    <Button color="primary" onClick={this.clossAll}>Listo</Button>
                                    </Col>
                                </Row>
                            </Container>
                        </ModalFooter>
                    </Modal>
                    
                </Row>
            </ModalBody>
            <ModalFooter>
                <Button color="default" onClick={() => toggle()}>
                    Close
                </Button>
            </ModalFooter>
            </Modal>
        );
    }
}