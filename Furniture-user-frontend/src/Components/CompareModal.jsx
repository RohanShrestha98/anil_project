/* eslint-disable react/prop-types */
import Modal from "react-modal";
import { useProductData } from "../hooks/useQueryData";
import bedRoom from "../assets/bedroom.png"
const customStyles = {
  overlay: {
    backgroundColor: "rgba(128, 128, 128, 0.5)", // Adjust the alpha value for transparency
  },
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "#fff", // Set the modal background color
  },
};

export default function CompareModal({
  isOpen,
  id,
  setSelectedProduct,
  setIsOpen,
}) {
    const {data} = useProductData()

    const filterData = data?.data?.filter((item)=>!item?.isRohan)
  let subtitle;
  const afterOpenModal = () => {
    subtitle.style.color = "#fff";
  };

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div>
      <Modal
        isOpen={isOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <p className="font-semibold text-lg">Choose Product</p>
        <div className="grid grid-cols-2 gap-3 py-4 max-h-[400px]">
        {
            filterData?.map((item)=>{
                return <div onClick={()=>{setSelectedProduct(item)
                closeModal()}} key={id} className="border hover:shadow-md p-4 rounded-md cursor-pointer">
                    <img src={item?.images?.[0]?.url} className="w-[140px] min-h-[100px] object-cover rounded-xl" alt="" />
                    <p className="text-gray-600 font-semibold">
                        {item?.name}
                    </p>
                </div>
            })
        }
        </div>
      </Modal>
    </div>
  );
}
