import { useEffect, useState } from 'react';
import Breadcrumb from '@/components/Breadcrumb';
import { useRouter } from 'next/router';
import { getInventoryById } from "@/hooks/useInventories";


interface Transaction {
    id: number;
    itemName: string;
    category: string;
    currency: string;
    price: number;
    quantity: number;
    type: string;
    unit: string;
    description: string;
    location: string;
    createdAt: string;

  }

const TableInventoryEdit = () => {
    const router = useRouter();
    const { id } = router.query;

    const [inventory, setInventory] = useState<Transaction>();

    useEffect(() => {
      const fetchTransaction = async () => {
        try {
          const inventoryData = await getInventoryById(Number(id));
          setInventory(inventoryData);
        } catch (err) {
          console.error(err);
        }
      };
  
      if (id) {
        fetchTransaction();
      }
    }, [id]);

  return (
    <>
    <Breadcrumb pageName="Inventory Edit" />
    <div className="flex flex-col gap-10">
        {inventory && (
            <div>
                <h2>Inventory ID: {inventory.id}</h2>
                <p>Item Name: {inventory.itemName}</p>
                <p>Price: {inventory.price}</p>
                <p>category: {inventory.category}</p>
                <p>currency: {inventory.currency}</p>
                <p>quantity: {inventory.quantity}</p>
                <p>type: {inventory.type}</p>
                <p>unit: {inventory.unit}</p>
                <p>description: {inventory.description}</p>
                <p>location: {inventory.location}</p>
                <p>createdAt: {inventory.createdAt}</p>
            </div>
        )}
    </div>
</>
  );
};

export default TableInventoryEdit;