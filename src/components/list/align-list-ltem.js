import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';

export default function AlignListItem(props) {
    return (
        <ListItem alignItems="flex-start">
            {props.item.cover &&
                <ListItemAvatar>
                    <Avatar alt="Remy Sharp" src={props.item.cover} />
                </ListItemAvatar>
            }
            <ListItemText
                primary={props.item.title && props.item.title}
                secondary={props.item.subtitle && props.item.subtitle}
            />
        </ListItem>
    );
}