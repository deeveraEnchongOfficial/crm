import Breadcrumb from '@/components/Breadcrumb';
import LoadingButton from "@/components/LoadingButton";

const TableInventoryNew = () => {

  const handleCreate = () => {


  }
  return (
    <>
      <Breadcrumb pageName="Inventory New" />
      <div className="flex flex-col gap-10 mt-10">
        <form>
          <div className="grid grid-flow-col justify-stretch">
            <div className="mb-4">
              <label className="mb-2.5 block font-medium text-black dark:text-white">
                Item Name
              </label>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Item Name"
                  className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                />
              </div>
            </div>
            <div className="mb-4 ml-9" >
              <label className="mb-2.5 block font-medium text-black dark:text-white">
                Item Code
              </label>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Item Code"
                  className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                />
              </div>
            </div>
          </div>
          <div className="grid grid-flow-col justify-stretch">
            <div className="mb-4">
              <label className="mb-2.5 block font-medium text-black dark:text-white">
                Currency
              </label>
              <select className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary">
                <option selected>Choose Currency</option>
                <option value="PHP">PHP-Philippine Peso</option>
                <option value="USD">USD-US Dollar</option>
                <option value="EUR">Euro</option>
                <option value="JPY">JPY-Japanese Yen</option>
              </select>
            </div>
            <div className="mb-4 ml-9" >
              <label className="mb-2.5 block font-medium text-black dark:text-white">
                Vendor/Supplier
              </label>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Vendor/Supplier"
                  className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                />
              </div>
            </div>
          </div>
          <div className="grid grid-flow-col justify-stretch">
            <div className="mb-4">
              <label className="mb-2.5 block font-medium text-black dark:text-white">
                Unit
              </label>
              <div className="relative">
                <input
                  type="number"
                  placeholder="Unit"
                  className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                />
              </div>
            </div>
            <div className="mb-4 ml-9" >
              <label className="mb-2.5 block font-medium text-black dark:text-white">
                Currency
              </label>
              <select className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary">
                <option selected>Categorization</option>
                <option value="TAN">Individual Purchase Order</option>
                <option value="TAS">Third Party Item</option>
                <option value="TANN">Free of charge item</option>
              </select>
            </div>
          </div>
          <div className="grid grid-flow-col justify-stretch">
            <div className="mb-4">
              <label className="mb-2.5 block font-medium text-black dark:text-white">
                Location
              </label>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Location"
                  className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                />
              </div>
            </div>
            <div className="mb-4 ml-10" >
              <label className="mb-2.5 block font-medium text-black dark:text-white">
                Description
              </label>
              <div className="relative">
                <textarea
                  placeholder="Add A description"
                  className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                />
              </div>
            </div>
          </div>
          <div className="mb-2">
                <LoadingButton
                  isLoading={false}
                  onClick={handleCreate}
                  className="w-1/4 p-4 text-white transition border rounded-lg cursor-pointer border-primary bg-primary hover:bg-opacity-90"
                  >
                  Create New Item
                </LoadingButton>
            </div>
        </form>
      </div>
    </>
  );
};

export default TableInventoryNew;