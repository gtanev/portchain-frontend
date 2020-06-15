import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { InfoTableRow } from './InfoTableRow';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import { Paper } from '@material-ui/core';
import { themeColors } from '../../../constants/constants';
import { infoTableRowDetail } from './InfoTableRowDetail';
import isEqual from 'react-fast-compare';
import Fade from '@material-ui/core/Fade';

const HeaderCell = withStyles(theme => ({
  head: {
    backgroundColor: themeColors.primary,
    color: theme.palette.common.white,
    fontSize: 18,
    fontWeight: 'bold',
    paddingTop: 12,
    paddingBottom: 12,
  },
}))(TableCell);

function InfoTable({ columns, data, detailProp, detailText }) {
  if (!columns || !data) return null;

  const renderRow = (row, idx) => {
    let detailContent;

    if (detailProp) {
      if (detailProp === 'portCallDurations') {
        detailContent = infoTableRowDetail(row[detailProp]['percentiles'], detailText);
      } else if (detailProp === 'portCallDelays') {
        let titles = [],
          percentiles = [];

        row[detailProp].forEach(p => {
          titles.push(`<b>${p['days']} day forecast delays<b/> (h)`);
          percentiles.push(p['percentiles']);
        });

        const charts = titles.map((t, i) => infoTableRowDetail(percentiles[i], t));

        detailContent = (
          <Grid container item direction="row" justify="space-evenly" alignItems="stretch" xs>
            {charts.map((chart, idx) => (
              <Grid key={`c_${idx}`} item xs={12 / charts.length}>
                {chart}
              </Grid>
            ))}
          </Grid>
        );
      }
    }

    let { [detailProp]: omit, ...rowLessDetail } = row;

    return (
      <InfoTableRow
        key={row.id}
        row={{ count: idx + 1, ...rowLessDetail }}
        detail={detailContent}
      />
    );
  };

  return (
    <Fade in>
      <Table stickyHeader aria-label="collapsible table" className="info-table" size="small">
        <TableHead>
          <TableRow >
            <HeaderCell />
            <HeaderCell>#</HeaderCell>
            {columns &&
              columns.map(label => (
                <HeaderCell key={label} className="info-heading">
                  {label}
                </HeaderCell>
              ))}
          </TableRow>
        </TableHead>
        <TableBody component={Paper}>{data && data.map(renderRow)}</TableBody>
      </Table>
    </Fade>
  );
}

export default React.memo(InfoTable, isEqual);
