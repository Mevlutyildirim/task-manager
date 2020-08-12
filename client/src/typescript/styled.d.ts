import 'styled-components'
declare module 'styled-components' {
  export interface Theme{
    
    colors: {
      primary: string,
      secondary:string,
      third:string,
      success: string,
      warning:string,
      danger:string,
      text: {
        primary:string,
        secondary:string
      },
      bg:{
        default:string,
        dark:string
      }
    }
  }
}