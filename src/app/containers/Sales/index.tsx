/**
 *
 * Sales
 *
 */

import React, { memo, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { useSelector, useDispatch } from 'react-redux';

import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { reducer, sliceKey, actions } from './slice';
import { selectSalesList, selectSalesLoading } from './selectors';
import { salesSaga } from './saga';

import {
  Grid,
  Paper,
  CircularProgress,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
} from '@material-ui/core';

interface Props {}

export const Sales = memo((props: Props) => {
  useInjectReducer({ key: sliceKey, reducer: reducer });
  useInjectSaga({ key: sliceKey, saga: salesSaga });

  const sales = useSelector(selectSalesList);
  const salesLoading = useSelector(selectSalesLoading);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const dispatch = useDispatch();

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t: translate, i18n } = useTranslation();

  useEffect(() => {
    dispatch(actions.loadSalesList());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Helmet>
        <title>Sales</title>
        <meta name="description" content="Description of Sales" />
      </Helmet>
      <Paper>
        {salesLoading ? (
          <CircularProgress />
        ) : (
          sales.length > 0 && (
            <TableContainer>
              <Table stickyHeader aria-label="sticky table">
                <TableHead>
                  <TableRow>
                    {Object.entries(sales[0]).map(([key, value], index) => {
                      return (
                        <TableCell key={index} align="center">
                          {key}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {sales.map(sale => {
                    return (
                      <TableRow hover role="checkbox" key={sale.id}>
                        {Object.entries(sale).map(([key, value], index) => {
                          return (
                            <TableCell key={index} align="center">
                              <pre>{JSON.stringify(value, null, 2)}</pre>
                            </TableCell>
                          );
                        })}
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
            </TableContainer>
          )
        )}
        {/* <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        /> */}
      </Paper>
    </>
  );
});
