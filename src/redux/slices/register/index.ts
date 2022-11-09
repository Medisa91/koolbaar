// // import { createSlice } from "@reduxjs/toolkit";

// // interface IRegister {
// //   PersonalPhoto: File;
// //   AboutMe: string;
// //   FirstName: string;
// //   LastName: string;
// //   DisplayName: string;
// //   PhoneNumber: string;
// //   Email: string;
// //   Address: string;
// //   Position_lat: string;
// //   Position_long: string;
// //   Password: string;
// //   RePassword: string;
// //   PassportPhoto: File;
// //   SecondIdentityPhoto: File;
// //   Client_Id: string;
// //   Client_Secret: string;
// //   Device_Model: string;
// //   Device_Id: number;
// //   Player_Id: number;
// // }

// // const initialState: IRegister = {
// //   PersonalPhoto: null,
// //   AboutMe: "",
// //   FirstName: "",
// //   LastName: "",
// //   DisplayName: "",
// //   PhoneNumber: "",
// //   Email: "",
// //   Address: "",
// //   Position_lat: "",
// //   Position_long: "",
// //   Password: "",
// //   RePassword: "",
// //   PassportPhoto: null,
// //   SecondIdentityPhoto: null,
// //   Client_Id: "",
// //   Client_Secret: "",
// //   Device_Model: "",
// //   Device_Id: null,
// //   Player_Id: null,
// // };

// // const registerSlice = createSlice({
// //   name: "register",
// //   initialState,
// //   reducers: {
// //     createUser: (state) => {
// //       // state.count++;
// //     },
// //   },
// // });

// // export const { createUser } = registerSlice.actions;

// // export default registerSlice.reducer;

// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import AuthorizationService from "services/authorizationService";
// import { IRegister } from "models/redux-models";

// const initialState: IRegister = {
//   personalPhoto: null,
//   aboutMe: "",
//   firstName: "",
//   lastName: "",
//   displayName: "",
//   phoneNumber: "",
//   email: "",
//   address: "",
//   position_lat: "",
//   position_long: "",
//   password: "",
//   rePassword: "",
//   passportPhoto: null,
//   secondIdentityPhoto: null,
//   client_Id: "",
//   client_Secret: "",
//   device_Model: "",
//   device_Id: null,
//   player_Id: null,
// };

// export const createUser = createAsyncThunk("register", async (data: any) => {
//   // const body = new FormData();
//   // body.append("file", data);
//   const res = await AuthorizationService.create(data);
//   return res.data;
// });

// const registerSlice = createSlice({
//   name: "register",
//   initialState,
//   reducers: {},
//   extraReducers: (builder) => {
//     builder.addCase(createUser.fulfilled, (state, action) => {
//       console.log(action.payload);
//     });
//   },
// });

// export default registerSlice.reducer;

// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import TypesService from "services/typesService";

// const initialState: object[] = [{}];

// export const allPackagesType = createAsyncThunk("Packagetype", async () => {
//   const res = await TypesService.getAllPackagesType();
//   return res.data;
// });

// const typesSlice = createSlice({
//   name: "packageTypes",
//   initialState,
//   reducers: {},
//   extraReducers: (builder) => {
//     builder.addCase(allPackagesType.fulfilled, (state, action) => {
//       return [...action.payload];
//     });
//   },
// });

// export default typesSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

export const registerSlice = createSlice({
  name: "register",
  initialState: {
    data: [],
  },
  reducers: {
    addNewUser: (state, action) => {
      state.data.push(action.payload);
    },
  },
});

export const { addNewUser } = registerSlice.actions;
export default registerSlice.reducer;
