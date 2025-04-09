import React, { useEffect } from "react";
import { getUserProfileAction } from "../../redux/slices/users/usersSlice";
import { useDispatch, useSelector } from "react-redux";

const AdminRoutes = ({ children }) => {
  //dispatch
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUserProfileAction());
  }, [dispatch]);
  //get user from store
  const { userAuth } = useSelector((state) => state?.users);

  const isAdmin = userAuth?.userInfo?.userFound?.isAdmin ? true : false;
  if (!isAdmin) return <h1> Access Denied, Admin Only</h1>;
  return <>{children}</>;
};

export default AdminRoutes;
