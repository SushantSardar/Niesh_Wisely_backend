const Router = require("express");

const signup = require("../controllers/auth/signupControllers");
const login = require("../controllers/auth/loginControllers");
// const addproductlist = require("../controllers/product/addProductList");
const addreview = require("../controllers/review/addReview");
const showreviews = require("../controllers/review/showReview");
const askQuestion = require("../controllers/faq/askQuestion");
// const showProductList = require("../controllers/product/showProductList");
const addclientlist = require("../controllers/addClientList/addClientListControllers");
const showclientlist = require("../controllers/addClientList/showClientList");
const addsupport = require("../controllers/addSupport/addSupportControllers");
const addcomplaint = require("../controllers/addComplaint/addComplaintControllers");
const showcomplaints = require("../controllers/addComplaint/showComplaintControllers");
const addprofile = require("../controllers/addProfile/addProfileControllers");
const sendcall = require("../controllers/sendCall/sendCallControllers");
const getcalls = require("../controllers/sendCall/getCallControllers");
const clientlogin = require("../controllers/addClientList/clientLoginControllers");
const addUser = require("../controllers/users/addUserData");
const factSheet = require("../controllers/factSheet/addFactSheet");
// const isAuth = require("../middlewares/auth/isAuth");
const getQuestion = require("../controllers/faq/getQuestion");
const getUserData = require("../controllers/users/getUserData");

const router = Router();

// const deleteAllComplaints = require("../controllers/addComplaint/deleteComplaints");
const deleteAllClients = require("../controllers/addClientList/deleteClients");
const getprofiles = require("../controllers/addProfile/showProfile");
const updateCall = require("../controllers/sendCall/updateCall");
const getServices = require("../controllers/services/getServiceData");
const addService = require("../controllers/services/setServiceData");
const showClientListId = require("../controllers/addClientList/showClientUsingId");
// const showServiceIndividualId = require("../controllers/services/showIndividualService");
const updateReview = require("../controllers/review/updateReview");
const NewShowproductlist = require("../controllers/product/newShowProductList");
const newAddProduct = require("../controllers/product/newAddProduct");
const newUpdateProduct = require("../controllers/product/newUpdateProduct");
const showProductbyId = require("../controllers/product/showProductbyId");
const showOneComplaint = require("../controllers/addComplaint/showOneCompalaint");
const updateComplaint = require("../controllers/addComplaint/updateComplaint");
const getQuestionbyId = require("../controllers/faq/getQuestionbyId");
const updateFaq = require("../controllers/faq/updateFaq");
const getOneUser = require("../controllers/users/getOneUser");
const updateUser = require("../controllers/users/updateUser");
const showOneProfile = require("../controllers/addProfile/showOneProfile");
const updateProfile = require("../controllers/addProfile/updateProfile");
const ShowFactSheetInAPP = require("../controllers/factSheet/appFactSheetData");
const updateClientFromDashboard = require("../controllers/addClientList/updateClientFromDashboard");
const updateClient = require("../controllers/addClientList/updateClient");
const ShowFactSheetForProductInAPP = require("../controllers/factSheet/appProductFactsheet");
const ShowFactSheetAccuracyInApp = require("../controllers/factSheet/getAccuracy");
const createQuery = require("../controllers/queryOrSuggestion/addQuery");
const showQuery = require("../controllers/queryOrSuggestion/showQuery");
const createCoupon = require("../controllers/offerCoupon/addCoupon");
const showCoupon = require("../controllers/offerCoupon/getCoupon");
const delProduct = require("../controllers/product/newDeleteProduct");
const FactSheet = require("../controllers/factSheet/addFactSheet");
const createComplaintRow = require("../controllers/complaintTable/addComplaintRow");
const showComplaintRow = require("../controllers/complaintTable/getComplaintRow");
const EditCoupon = require("../controllers/offerCoupon/editCoupon");
const ShowCouponByID = require("../controllers/offerCoupon/showSingleCoupon");
const ShowComplaintRowByID = require("../controllers/complaintTable/getComplaintRowById");
const EditComplaintRow = require("../controllers/complaintTable/editComplaintRow");
const CreateAnnualComplaintRow = require("../controllers/annualComplaintTable/addAnnualComplaintRow");
const EditAnnualComplaintRow = require("../controllers/annualComplaintTable/editAnnualComplaintRow");
const showAnnualComplaintRow = require("../controllers/annualComplaintTable/getAnnualComplaintRow");
const ShowAnnualComplaintRowByID = require("../controllers/annualComplaintTable/getAnnualComplaintRowById");
const createClientComplaintRow = require("../controllers/clientComplaintTable/addClientComplaintRow");
const showClientComplaintRow = require("../controllers/clientComplaintTable/getClientComplaintRow");
const ShowClientComplaintRowByID = require("../controllers/clientComplaintTable/getClientComplaintRowById");
const EditClientComplaintRow = require("../controllers/clientComplaintTable/editClientComplaintRow");
const updateToken = require("../controllers/addClientList/updateToken");
const expireClient = require("../controllers/addClientList/autoExpirer");
// const delClientProduct = require("../controllers/addClientList/deleteClientById");

//for temporary notification testing
// const saveExpoTokens = require("../controllers/expoToken/tokenController");
// const getAllExpoTokens = require("../controllers/expoToken/tokenController");
const {SaveExpoTokens,getAllExpoTokens} = require("../controllers/expoToken/tokenController");
const {sendPushNotifications} = require("../controllers/expoToken/sendNotifications");
const clientForgetPassword = require("../controllers/forgetPassword/appClientForgetPassword");
const createMarquee = require("../controllers/marquee/addMarquee");
const showMarquee = require("../controllers/marquee/getMarquee");
const getcallsByClientId = require("../controllers/sendCall/getCallByClientIdForApp");
const ShowMarqueeForDashboard = require("../controllers/marquee/getMarqueeForDashboard");
const showLatestMarquee = require("../controllers/marquee/getMarquee");

/* Auth routes */
router.post("/auth/signup", signup);
router.post("/auth/login", login);

/* Review Routes */
router.post("/addreview", addreview);
router.get("/showreviews", showreviews);
router.put("/updateReview/:id", updateReview);

/* FAQ Routes */
router.post("/askquestion", askQuestion);
router.get("/getquestion", getQuestion);
router.put("/updateFaq/:id", updateFaq);
router.get("/getquestion/:id", getQuestionbyId);

/* Client Routes */
router.post("/addclientlist", addclientlist);
router.get("/showclientlist", showclientlist);
router.get("/showclientlist/:id", showClientListId);
router.put("/clients/:id", updateClientFromDashboard);
router.post("/client/login", clientlogin);
router.put("/updateclientlist/:id", updateClient);
router.delete("/clients/delete", deleteAllClients);
router.put("/updatetoken/:id", updateToken);

//For Client Expiring ...
router.get("/expireclientswithserviceenddate", expireClient);
router.post("/clientForgetPassword", clientForgetPassword);

// router.delete('/deleteClientProduct/:id', delClientProduct);
// router.put("/showclientlistFromDashboard/:id",updateClientFromDashboard)

/* Support Routes */
router.post("/addsupport", addsupport);

/* Complaint Routes */
router.post("/addcomplaint", addcomplaint);
router.get("/showcomplaints", showcomplaints);
router.get("/showcomplaints/:id", showOneComplaint);
router.put("/updatecomplaint/:id", updateComplaint);
// router.delete("/complaints/delete",deleteAllComplaints);

/* Profile Routes */
router.post("/addprofile", addprofile);
router.get("/getprofiles", getprofiles);
router.get("/getprofiles/:id", showOneProfile);
router.put("/updateprofile/:id", updateProfile);

/* User Routes */
router.post("/adduser", addUser);
router.get("/getuser", getUserData);
router.get("/getuser/:id", getOneUser);
router.put("/updateuser/:id", updateUser);

/* Factsheet Routes */
router.post("/factsheet", FactSheet);
router.get("/showFactSheetInApp", ShowFactSheetInAPP);
router.get("/showFactSheetForProductInApp", ShowFactSheetForProductInAPP);
router.get("/getAccuracy", ShowFactSheetAccuracyInApp);

/* Calls Routes */
router.post("/sendcall", sendcall);
router.get("/getcalls", getcalls);
router.get("/getcallsByClientId/:id", getcallsByClientId);
router.put("/updatecall/:id", updateCall);

/* Service Routes */
router.post("/sendservices", addService);
router.get("/getservices", getServices);
// router.get("/getservices/:id",showServiceIndividualId);

/* Product Routes */
router.post("/newProduct", newAddProduct);
router.get("/newProductList", NewShowproductlist);
router.get("/newProductList/:id", showProductbyId);
router.put("/updateProduct/:id", newUpdateProduct);
router.delete("/delete/:id", delProduct);
// router.get("/products/all", showProductList);

/* Query Routes */
router.post("/addQuery", createQuery);
router.get("/showQuery", showQuery);

/* Coupon Routes */
router.post("/addCoupon",  createCoupon);
router.get("/showCoupon", showCoupon);
router.get("/showSingleCoupon/:id", ShowCouponByID);
router.put("/editCoupon/:id", EditCoupon);

/* Complaint Table Routes */
router.post("/addComplaintRow", createComplaintRow);
router.get("/showComplaintRow", showComplaintRow);
router.get("/showComplaintRowById/:id", ShowComplaintRowByID);
router.put("/editComplaintRowById/:id", EditComplaintRow);

/* Annual Complaint Table Routes */
router.post("/addAnnualComplaintRow", CreateAnnualComplaintRow);
router.get("/showAnnualComplaintRow", showAnnualComplaintRow);
router.get("/showAnnualComplaintRowById/:id", ShowAnnualComplaintRowByID);
router.put("/editAnnualComplaintRowById/:id", EditAnnualComplaintRow);

/* Client Complaint Table Routes */
router.post("/addClientComplaintRow", createClientComplaintRow);
router.get("/showClientComplaintRow", showClientComplaintRow);
router.get("/showClientComplaintRowById/:id", ShowClientComplaintRowByID);
router.put("/editClientComplaintRowById/:id", EditClientComplaintRow);

//for  notifications getting and saving
router.post("/saveexpotokens", SaveExpoTokens);
router.get("/getexpotokens", getAllExpoTokens);
router.post("/sendnotifications", sendPushNotifications);

//for marquee in app home page
router.post("/addMarquee",createMarquee);
router.get("/showMarquee",showLatestMarquee);
router.get("/showMarqueeForDashboard",ShowMarqueeForDashboard);


//For Client Expiring ...

/* Not In Use */

//dash board routes
// router.post("/addproductlist", addproductlist);

module.exports = router;
