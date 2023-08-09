import { useEffect, useState } from "react";
import Link from "next/link";
import { getInventories } from "@/hooks/useInventories";
import Pagination from "@/components/Pagination";
import { deleteInventoryItem } from "@/hooks/useInventory";
interface Transaction {
  id: number;
  itemName: string;
  price: number;
  quantity: number;
}

const TableInventory = () => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [perPage, setPerPage] = useState<number>(10);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [total, setTotal] = useState<number>(1);
  const [search, setSearch] = useState<string>();

  useEffect(() => {
    getInventories(search, currentPage, perPage).then((data) => {
      setTransactions(data?.data || []);
      setTotal(data?.total);
    });
  }, [search, currentPage, perPage]);

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
  };

  return (
    <>
      <div className="flex content-center justify-center justify-between h-0 mb-1">
        <h4 className="mt-2 mb-6 ml-3 text-xl font-semibold dark:text-white">
          Transactions list
        </h4>
        <Link href='/inventory/new'
          className="flex items-center w-16 h-8 p-4 mb-10 text-white transition border rounded-lg cursor-pointer border-primary bg-primary hover:bg-opacity-90"
          >
          Add
        </Link>
      </div>
      <div className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
        <div className="flex flex-col">
          <div className="grid grid-cols-3 rounded-sm bg-gray-2 dark:bg-meta-4 sm:grid-cols-5">
            <div className="p-2.0 text-center xl:p-4">
              <h5 className="text-sm font-medium uppercase xsm:text-base">
                Item Name
              </h5>
            </div>
            <div className="p-2.0 text-center xl:p-4">
              <h5 className="text-sm font-medium uppercase xsm:text-base">
                Price
              </h5>
            </div>
            <div className="hidden p-2.5 text-center sm:block xl:p-4">
              <h5 className="text-sm font-medium uppercase xsm:text-base">
                Quantity
              </h5>
            </div>
            <div className="hidden p-2.5 text-center sm:block xl:p-4">
              <h5 className="text-sm font-medium uppercase xsm:text-base">
                Status
              </h5>
            </div>
            <div className="hidden p-2.5 text-center sm:block xl:p-4">
              <h5 className="text-sm font-medium uppercase xsm:text-base">
                Actions
              </h5>
            </div>
          </div>
          {transactions?.map((data) => {
            return (
              <ul key={data?.id}>
                {
                  <div className="grid grid-cols-3 border-b border-stroke dark:border-strokedark sm:grid-cols-5">
                    <div className="flex items-center justify-center p-2.5 xl:p-3 font-bold">
                      <p className="text-black dark:text-white">
                        {data?.itemName}
                      </p>
                    </div>

                    <div className="flex items-center justify-center p-2.5 xl:p-2">
                      <p className="text-black dark:text-white">
                        {data?.price}
                      </p>
                    </div>

                    <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-2">
                      <p className="">{data?.quantity}</p>
                    </div>

                    <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-2">
                      <p className="items-center justify-center font-semibold text-center border-solid rounded-full text-meta-3 bg-meta-9 w-15 ">
                        Paid
                      </p>
                    </div>

                    <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-2">
                      <Link href={`/inventory/${data.id}`}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          fill="currentColor"
                          className="bi bi-eye"
                          viewBox="0 0 16 16"
                        >
                          {" "}
                          <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />{" "}
                          <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />{" "}
                        </svg>
                      </Link>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        fill="currentColor"
                        className="ml-4 bi bi-trash"
                        viewBox="0 0 16 16"
                        onClick={()=>{ deleteInventoryItem(data?.id)}}
                      >
                        {" "}
                        <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />{" "}
                        <path
                          fill-rule="evenodd"
                          d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
                        />{" "}
                      </svg>
                      </div>
                  </div>
                }{" "}
              </ul>
            );
          })}
          <Pagination
            total={total}
            perPage={perPage}
            currentPage={currentPage}
            updatePage={handlePageChange}
          />
        </div>
      </div>
    </>
  );
};

export default TableInventory;
