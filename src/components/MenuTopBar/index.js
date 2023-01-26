import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';

import { useState } from 'react';
import { Drawer } from '@mui/material';

export default function MenuTopBar() {

    const [DrawerVisible, setDrawerVisible] = useState(false);  

    return (
        <Box sx={{ flexGrow: 2 }}>
            <AppBar position={"static"} color='primary'>
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        MySweetPortfolio
                    </Typography>
                    <MenuIcon onClick={() => setDrawerVisible(true)} />
                </Toolbar>
            </AppBar>

            <Drawer
                open={DrawerVisible}
                anchor={"right"}
                onClose={() => setDrawerVisible(false)}
            >
                <Box
                    role="presentation"
                >
                    <List>
                        <ListItem key={1} disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    <MailIcon />
                                </ListItemIcon>
                                <ListItemText primary={'Salve'} />
                            </ListItemButton>
                        </ListItem>
                    </List>
                    <Divider />
                    <List>
                        <ListItem key={2} disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    <InboxIcon />
                                </ListItemIcon>
                                <ListItemText primary={"Teste Embaixo"} />
                            </ListItemButton>
                        </ListItem>
                    </List>
                </Box>
            </Drawer>
        </Box>
    )
}