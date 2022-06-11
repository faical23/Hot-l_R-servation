import Swal from 'sweetalert2'


export function SwalAlert(Msg,Type) {
    return Swal.fire({
        position: 'top-end',
        icon: Type,
        title: Msg,
        showConfirmButton: false,
        timer: 1500
      })
}