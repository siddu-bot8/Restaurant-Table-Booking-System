import app from "./app.js";

const PORT = process.env.PORT || 5000;  // fallback for local

app.listen(PORT, () => {
    console.log(`SERVER HAS STARTED AT PORT ${PORT}`);
});
