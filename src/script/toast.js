class Toast {
    static toastErro (erro){
        Toastify({
            text: erro,
            duration: 3000,
            close: true,
            gravity: "top",
            position: "center", 
            stopOnFocus: true, 
            style: {
            background: "linear-gradient(to right, #ffffff, #d50000  )",
            color:"#010002"
            },
        }).showToast();
    }
}
export default Toast