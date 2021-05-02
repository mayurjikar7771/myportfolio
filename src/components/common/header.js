import React,{ useState }from 'react';
//import { Menu } from 'antd';
import { Anchor,Drawer, Button } from 'antd';

const { Link } = Anchor;
const AppHeader = () => {
    const [visible, setVisible] = useState(false);
  const showDrawer = () => {
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };
   
     return (
          
        <div className="container-fluid">
            <div className="header">
            <div className="logo">
                 <i className="fas fa-bolt"></i>
                 <a href="http://google.com">Technical Blogs</a>
            </div>
            {/* <Menu  mode="horizontal" defaultSelectedKeys={['home']}>
                <Menu.Item key="home">Home</Menu.Item>
                <Menu.Item key="about">About</Menu.Item>
                <Menu.Item key="features">Features</Menu.Item>
                <Menu.Item key="howitwork">How it work</Menu.Item>
                <Menu.Item key="faq">FAQ</Menu.Item>
                <Menu.Item key="pricing">Pricing</Menu.Item>
                <Menu.Item key="contact">Contact</Menu.Item>
            </Menu> */}
             <div className="mobileHidden">
                 <Anchor targetOffset="65"> 
                    <Link href="#hero" title="Home" />
                    <Link href="#feature" title="Features" />
                    <Link href="#works" title="How it works" />
                    {/* <Link href="#pricing" title="Pricing" /> */}
                    <Link href="#about" title="About" />
                    <Link href="#contact" title="Contact" />
                    <Link href="#faq" title="FAQ" />
                  </Anchor>
               </div>
               <div className="mobileVisible">
               <Button type="primary" onClick={showDrawer}>
              <i className="fas fa-bars"></i>
              </Button>
              <Drawer
                      placement="right"
                      mask={false}
                     onClose={onClose}
                     visible={visible}
               >
                 <Anchor targetOffset="65"> 
                    <Link href="#hero" title="Home" />
                    <Link href="#about" title="About" />
                    <Link href="#feature" title="Features" />
                    <Link href="#works" title="How it works" />
                    <Link href="#faq" title="FAQ" />
                    <Link href="#pricing" title="Pricing" />
                    <Link href="#contact" title="Contact" />
                  </Anchor>
             </Drawer>
               </div>
            </div>
        </div>

     );

}

export default AppHeader;