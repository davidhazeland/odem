export const mobile = '@media only screen and (max-width: 767px)'
export const tablet = '@media only screen and (max-width: 991px) and (min-width: 768px)'
export const computer = '@media only screen and (min-width: 992px)'

const hidden = {
  display: 'none'
}

export default {
  mobileOnly: {
    [tablet]: hidden,
    [computer]: hidden
  },
  mobileHidden: {
    [mobile]: hidden
  },
  computerOnly: {
    [mobile]: hidden,
    [tablet]: hidden
  }
}
