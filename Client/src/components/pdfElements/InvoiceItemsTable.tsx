
import { View, StyleSheet } from '@react-pdf/renderer';
import InvoiceTableHeader from './InvoiceTableHeader';
import InvoiceTableRow from './InvoiceTableRow';
import InvoiceTableFooter from './InvoiceTableFooter';
import { OrderType } from '../../pages/orderManagement/types';

const styles = StyleSheet.create({
    tableContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: 24,
        borderWidth: 1,
        borderColor: '#3778C2',
    },
});

const InvoiceItemsTable = ({ invoice }:{ invoice:OrderType }) => (
  
    <View style={styles.tableContainer}>
        <InvoiceTableHeader />
        <InvoiceTableRow invoice={invoice} />
        {/* <InvoiceTableFooter items={invoice} /> */}
    </View>
);

export default InvoiceItemsTable;