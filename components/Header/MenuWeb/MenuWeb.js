import { useState } from "react";
import { Container, Grid, Menu, Icon , Label } from "semantic-ui-react";
import Link from "next/link";
import BasicModal from "../../Modal/BasicModal";
import Auth from "../../Auth";

export default function MenuWeb() {
    const [showModal, setShowModal] = useState(false);
    const [titleModal, setTitleModal] = useState("Inicia Sesión");
    const onShowModal = () => setShowModal(true);
    const onCloseModal = ()=> setShowModal(false);
    return(
    <div className="menu">
    <Container>
        <Grid>
            <Grid.Column className="menu__left" width={6}>
                <Menuplatforms onShowModal={onShowModal}/>
            </Grid.Column>
            <Grid.Column className="menu__right" width={10}>
                <MenuOptions onShowModal={onShowModal}/>
            </Grid.Column>
        </Grid>
    </Container>
   <BasicModal show={showModal} setShow={setShowModal} title={titleModal} size="small">
        <Auth onCloseModal={onCloseModal} setTitleModal={setTitleModal}/>
    </BasicModal>


    </div>
    )
    
}

function Menuplatforms(props) {
    const { onShowModal }=props;

    return (
        <Menu>
            <Link href="/play-station">
                <Menu.Item as="a">PlayStation</Menu.Item>
            </Link>
            <Link href="/play-station">
                <Menu.Item as="a">PlayStation</Menu.Item>
            </Link>
            <Link href="/play-station">
                <Menu.Item as="a">PlayStation</Menu.Item>
            </Link>
        </Menu>
    )
}

function MenuOptions(props){
    const { onShowModal }=props;
    return (
        <Menu>
        <Menu.Item onClick={onShowModal}>
            <Icon Name="user outline"/>
            Mi cuenta
        </Menu.Item>
        </Menu>
    )
}



