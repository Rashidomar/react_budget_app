
export const getcurrentFormat = (value, cur) =>
  new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: cur
  }).format(value);


export const getProgress = (amount, max) =>{
    const percent = parseInt((amount / max) * 100 )
    if (percent >= 0 &&  percent <= 50) return "primary"
    if (percent >= 51 && percent <= 75) return "warning"
    if (percent >= 76) return "danger"

}

