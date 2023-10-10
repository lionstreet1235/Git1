
document.querySelector('form[name="frm1"]').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission behavior
    var isFormValid = kiemTra();

    if (isFormValid) {
        this.submit(); // Submit the form if validation passes
    }
});

function kiemTra() {
    var ht = document.frm1.ht.value.trim(); // Remove leading and trailing spaces
    var email = document.frm1.email.value.trim();
    var phoneNumber = document.frm1.phone_number.value.trim();
    var address = document.frm1.address.value.trim();
    var quocTich = document.frm1.quocTich.value;
    var bosung = document.frm1.bosung.value.trim();
    var gioiTinh = document.frm1.gender.value;
    var checkboxes = document.querySelectorAll('input[name="hobby"]:checked');
    var soThich = Array.from(checkboxes).map(function(checkbox) {
        return checkbox.value;
    });
    var loi = "";

    if (phoneNumber.length !== 10 || isNaN(phoneNumber)) {
        loi = loi + "Số điện thoại không hợp lệ <br>";
        document.frm1.phone_number.classList.add("bg-warning");
    }

    if (ht.length === 0 || ht.length > 30) {
        loi = loi + "Họ tên không được bỏ trống và phải nhỏ hơn 30 ký tự <br>";
        document.frm1.ht.classList.add("bg-warning");
    }

    if (address.length === 0 || address.length > 100) {
        loi = loi + "Vui lòng nhập địa chỉ nhận hàng không quá 100 ký tự<br>";
        document.frm1.address.classList.add("bg-warning");
    }

    if (!isValidEmail(email)) {
        loi = loi + "Email không hợp lệ<br>";
        document.frm1.email.classList.add("bg-warning");
    }

    if (gioiTinh === '') {
        loi = loi + "Bạn chưa chọn giới tính<br>";
        document.getElementById("gender_input").classList.add("bg-warning");
    }

    if (soThich.length === 0) {
        loi = loi + "Bạn chưa chọn sở thích<br>";
        document.getElementById("hobbies_input").classList.add("bg-warning");
    }

    if (quocTich === '0') {
        loi = loi + "Bạn chưa chọn quốc tịch<br>";
        document.frm1.quocTich.classList.add("bg-warning");
    }

    if (bosung.length > 200) {
        loi = loi + "Hãy nhập thông tin bổ sung ít hơn 200 ký tự";
        document.frm1.bosung.classList.add("bg-warning");
    }

    if (loi.length > 0) {
        document.getElementById("loi").innerHTML = loi;
    }

    return loi.length === 0; // Return true if there are no validation errors, otherwise false
}

function isValidEmail(email) {
    // Basic email validation regex
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}
