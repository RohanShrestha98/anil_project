import moment from "moment"
import { useTrackOrderData } from "../hooks/useQueryData"

export default function TrackOrder() {
  const {data} = useTrackOrderData()
  return (
    <div className="mx-20 my-10">
      <div className="border w-full p-4 text-xl font-semibold">
        <p className="text-[#191C1F]">Ordered Products ( Track order )</p>
      </div>
      <table className="w-full border">
            <thead>
              <tr className="text-[#475156] bg-[#E4E7E9] text-sm font-medium grid grid-cols-6 gap-6 py-5">
                <th>PRODUCTS</th>
                <th>PRICE</th>
                <th>QUANTITY</th>
                <th>Placed Order</th>
                <th>Status</th>
                <th>TOTAL</th>
              </tr>
            </thead>
            <tbody>
              {data?.data?.map((item, index) => (
                <tr key={index}  className={`grid cursor-pointer grid-cols-6 gap-6 px-4 py-5 text-gray-600 items-center`}>
                  <th className="flex items-center gap-2 text-sm font-medium ">
                    <img src={item?.images[0]?.url} alt="product" className="w-10 h-10 rounded-full object-cover" />
                    <p className="line-clamp-2">
                    {item?.name?.slice(0,50)}
                    </p>
                  </th>
                  <th className="text-sm font-medium">{item?.price}</th>
                  <th className="text-sm font-medium">{item?.count}</th>
                  <th className="text-sm font-medium">{moment(item?.createdAt).format("MMM Do YYYY, h:mm:ss a")}</th>
                  <th className={`text-sm font-medium py-1 w-[140px] ml-8 rounded-full ${item?.status==="pending"?"bg-yellow-50 text-yellow-600":"bg-green-50 text-green-600"}`}>{item?.status}</th>
                  <th className="text-sm font-medium">Rs {item?.count * (item?.price - item?.discount)}</th>
                </tr>
              ))}
            </tbody>
          </table>
    </div>
  )
}
