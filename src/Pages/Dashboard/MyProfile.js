import React from "react";

const MyProfile = () => {
  return (
    <div>
      <h2>My Profile</h2>
    </div>
  );
};

export default MyProfile;

// import React, { useEffect, useState } from "react";
// import { Table } from "react-bootstrap";
// import "./MyOrder.css";
// import { useAuthState } from "react-firebase-hooks/auth";
// import auth from "../../../../firebase.init";
// import { toast } from "react-toastify";
// import {  useNavigate } from "react-router-dom";
// import { signOut } from "firebase/auth";
// import axiosPrivate from "../../../../api/axiosPrivate";

// const MyOrder = () => {
//   const [user] = useAuthState(auth);
//   const [orders, setOrders] = useState([]);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const getOrder = async () => {
//       const email = user?.email;

//       const url = https://powerful-beyond-98796.herokuapp.com/orders?email=${email};
//       try {
//         const { data } = await axiosPrivate.get(url);
//         setOrders(data);
//       } catch (error) {
//         console.log(error.message);
//         if (error.response.status === 401 || error.response.status === 403) {
//           signOut(auth);
//           navigate("/login");
//         }
//       }
//     };
//     getOrder();
//   }, [user]);

//   const handleDelete = (id) => {
//     const proceed = window.confirm("Are You Sure?");
//     if (proceed) {
//       const url = https://powerful-beyond-98796.herokuapp.com/orders/${id};
//       fetch(url, {
//         method: "DELETE",
//       })
//         .then((res) => res.json())
//         .then((deleteItem) => {
//           console.log(deleteItem);
//           toast("Delivered One Item!");
//           const remaining = orders.filter((order) => order._id !== id);
//           setOrders(remaining);
//         });
//     }
//   };

//   const handlePaymet = (id) => {
//     navigate(/payment/${id});
//   };

//   return (
//     <div className="container my-5">
//       <h5 className="text-center fw-bold text-dark py-2">
//         Your Email: <span className="text-success">{user.email}</span>{" "}
//       </h5>
//       <h4 className="text-center fw-bold fs-4 text-dark pb-5">
//         Your Items: <span className="text-danger">{orders.length}</span>
//       </h4>

//       <div className=" table-responsive">
//         <Table hover size="sm" className="text-center" striped>
//           <thead className="rounded">
//             <tr className="rounded">
//               <th className=" img">Image</th>
//               <th>Name</th>
//               <th>Price</th>
//               <th>Order Quantity</th>
//               <th>Material</th>
//               <th>Payment</th>
//               <th>Delete</th>
//             </tr>
//           </thead>

//           {orders.map((order) => (
//             <tbody key={order._id}>
//               <td className="">
//                 <img src={order.img} alt="" className=" img-set img-fluid" />
//               </td>
//               <td className="pb-0 pt-3 fw-bold">{order.toolsname}</td>
//               <td className="pb-0 pt-3 fw-bold">
//                 <sup>$</sup>
//                 {order.price}
//               </td>
//               <td className="pb-0 pt-3 fw-bold">{order.order_quantity}</td>
//               <td className="pb-0 pt-3 fw-bold">{order.material}</td>

//               <td className="pb-0 pt-3 fw-bold">
//                 {order.price && !order.paid && (
//                   <i
//                   onClick={() => handlePaymet(order._id)}
//                    class="fa-solid fa-cart-shopping fs-5"
//                  ></i>
//                 )}
//                 {order.price && order.paid && (
//                   <h3 className="text-success fw-bold">PAID</h3>
//                 )}
//               </td>
//               <td className="pb-0 fw-bold  pt-3">

//               {order.price && !order.paid && (
//                     <i
//                     onClick={() => handleDelete(order._id)}
//                     class="fa-solid fa-trash-can fs-5"
//                   ></i>
//                 )}

//               </td>
//             </tbody>
//           ))}
//         </Table>
//       </div>
//     </div>
//   );
// };

// export default MyOrder;

// import React from "react";
// import { useAuthState } from "react-firebase-hooks/auth";
// import { useForm } from "react-hook-form";
// import { useQuery } from "react-query";
// import { useParams } from "react-router-dom";
// import { toast } from "react-toastify";
// import auth from "../../../firebase.init";
// import Loading from "../../shared/Loading";

// const BuyTool = () => {
//   const [user] = useAuthState(auth);
//   const { id } = useParams();

//   const { register, handleSubmit, reset } = useForm();
//   const onSubmit = (data) => {
//     if (data?.order_quantity < data?.min_order_quantity) {
//       toast("Please Increase Your Order Quantity");
//       return;
//     }
//     if (data?.order_quantity > data?.avail_quantity) {
//       toast("Please Decrease Your Order Quantity");
//       return;
//     }
//     if (
//       !(data?.order_quantity > data?.avail_quantity) &&
//       !(data?.order_quantity < data?.min_order_quantity)
//     ) {
//       console.log("from data ", data);
//       const url = https://fathomless-plains-16450.herokuapp.com/orders;
//       fetch(url, {
//         method: "post", //thakle update korbe na thakle add koreb put
//         headers: {
//           "content-type": "application/json",
//         },
//         body: JSON.stringify(data),
//       })
//         .then((res) => res.json())
//         .then((data) => {
//           console.log("success", data);
//           toast("Place order");
//           reset();
//         });
//     }
//   };
//   const { data: product, isLoading } = useQuery(["product", id], () =>
//     fetch(https://fathomless-plains-16450.herokuapp.com/tools/${id}).then(
//       (res) => res.json()
//     )
//   );

//   if (isLoading) {
//     return <Loading></Loading>;
//   }

//   return (
//     <div className="container mx-auto my-5 pb-5">
//       <div>
//         <h2 className="py-3 text-success fs-1 pb-5  text-center fw-bold">
//           Make A Order
//         </h2>
//         <div className=" d-flex justify-content-center">
//           <div>
//             <h3 className="fw-bold text-center my-5">
//               Tools Name: {product.toolsname}
//             </h3>
//             <img
//               src={product.img}
//               className="img-fluid  shadow"
//               style={{ height: "500px" }}
//               alt=""
//             />

//             <h6 className="fw-bold text-center mb-5 py-2">
//               Tools ID: {product._id}
//             </h6>
//           </div>
//         </div>
//       </div>
//       <div className="">
//         <div className="w-50 mx-auto my-4">
//           <form
//             className="flex flex-col mb-4 px-3 "
//             onSubmit={handleSubmit(onSubmit)}
//           >
//             <p>{user.displayName}</p>
//             <p>{user.email}</p>

//             <input
//               placeholder="Name"
//               value={user.email}
//               className="border p-2 mb-2 "
//               {...register("email", { required: true })}
//             />
//             <div className="flex flex-col justify-start items-start ">
//               <div className="flex justify-center items-center gap-2">
//                 <label>Vendor name:</label>
//                 <input
//                   placeholder="Vendor"
//                   value={product.vendor}
//                   className="border p-2 mb-2 "
//                   {...register("vendor", { required: true })}
//                 />
//               </div>
//               <div className="flex justify-center items-center gap-2">
//                 <label>Product name:</label>
//                 <input
//                   placeholder="Name"
//                   value={product.toolsname}
//                   className="border p-2 mb-2 "
//                   {...register("toolsname", { required: true })}
//                 />
//               </div>

//               <div className="flex justify-center items-center gap-2 ">
//                 <label>Description:</label>
//                 <input
//                   placeholder="Description"
//                   value={product.description}
//                   className="border p-2 mb-2 "
//                   {...register("description", { required: true })}
//                 />{" "}
//               </div>

//               <div className="flex justify-center items-center gap-2 ">
//                 <label>Minimum Quantity:</label>
//                 <input
//                   placeholder="minimum"
//                   value={product.min_order_quantity}
//                   className="border p-2 mb-2 "
//                   {...register("min_order_quantity", { required: true })}
//                 />
//               </div>

//               <div className="flex justify-center items-center gap-2 ">
//                 <label>Available Quantity:</label>
//                 <input
//                   placeholder="Available"
//                   value={product.avail_quantity}
//                   className="border p-2 mb-2 "
//                   {...register("avail_quantity", { required: true })}
//                 />
//               </div>

//               <div className="flex justify-center items-center gap-2 ">
//                 <label>Price :</label>
//                 <input
//                   placeholder="Price"
//                   value={product.price}
//                   className="border p-2 mb-2 "
//                   {...register("price", { required: true })}
//                 />
//               </div>

//               <div className="flex justify-center items-center gap-2 ">
//                 <label>photoURL :</label>
//                 <input
//                   placeholder="Photo Url"
//                   value={product.img}
//                   className="border p-2 mb-2 "
//                   {...register("img", { required: true })}
//                 />
//               </div>
//               <div className="flex justify-center items-center gap-2 ">
//                 <label>Material :</label>
//                 <input
//                   placeholder="Material"
//                   value={product.material}
//                   className="border p-2 mb-2 "
//                   {...register("material", { required: true })}
//                 />
//               </div>

//               <div className="flex justify-center items-center gap-2 ">
//                 <label>Address :</label>
//                 <input
//                   placeholder="address"
//                   type="text"
//                   className="border p-2 mb-2 "
//                   {...register("address", { required: true })}
//                 />
//               </div>

//               <div className="flex justify-center items-center  gap-2">
//                 <label>Phone :</label>
//                 <input
//                   placeholder="Phone number"
//                   type="number"
//                   className="border p-2 mb-2 "
//                   {...register("phone", { required: true })}
//                 />
//               </div>

//               <div className="flex justify-center items-center gap-2 ">
//                 <label>Order Quantity :</label>
//                 <input
//                   placeholder="Order Quantity"
//                   type="number"
//                   className="border p-2 mb-2 "
//                   {...register("order_quantity")}
//                 />
//               </div>
//             </div>

//             <input
//               className="border p-2 mb-2 btn btn-warning"
//               type="submit"
//               value="Place order"
//             />
//           </form>

//           {/* <h6>{id}</h6>

//       <h6>{tool.min_order_quantity}</h6>
//       <h4>{user?.email}</h4>
//       <h4>{user?.uid}</h4>
//       <h4>{user?.displayName}</h4>

//       {console.log(user)} */}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BuyTool;
