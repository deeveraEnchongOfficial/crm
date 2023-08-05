import Breadcrumb from '@/components/Breadcrumb';
import TableInventory from '@/sections/@inventory/TableInventory';

const Tables = () => {
  return (
    <>
      <Breadcrumb pageName="Inventory" />
      <div className="flex flex-col gap-10">
        <TableInventory />
      </div>
    </>
  );
};

export default Tables;
