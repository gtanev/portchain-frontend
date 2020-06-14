import React from 'react';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import IconButton from '@material-ui/core/IconButton';
import KeyboardArrowUpIcon from 'mdi-material-ui/ChevronUp';
import KeyboardArrowDownIcon from 'mdi-material-ui/ChevronDown';
import Collapse from '@material-ui/core/Collapse';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';

const useRowStyles = makeStyles({
  root: {
    '& > *': {
      borderBottom: 'unset',
    },
  },
  body: {
    paddingTop: 9,
    paddingBottom: 9,
  },
});

export function InfoTableRow({ row, detail }) {
  const [open, setOpen] = React.useState(false);
  const classes = useRowStyles();

  if (!row) return null;

  return (
    <React.Fragment>
      <TableRow className={classes.root}>
        <TableCell className={classes.body}>
          <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        {Object.keys(row).map((prop, idx) => (
          <TableCell key={idx} className={classes.body}>
            {row[prop]}
          </TableCell>
        ))}
      </TableRow>
      <TableRow>
        <TableCell
          style={{ paddingBottom: 0, paddingTop: 0 }}
          colSpan={Object.keys(row).length + 1}
        >
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box className="info-table-detail">{detail}</Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}
