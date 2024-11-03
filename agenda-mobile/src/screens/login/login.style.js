import {COLORS, FONT_SIZE} from "../../constants/theme";

export const styles = {
     
    container:{
        backgrounColor: COLORS.white,
        flex: 1,
        padding: 50,
        justifyContent: "space-between"
    },
    containerLogo:{
        alignItems: "center"
    },
    logo: {
        width: 250,
        height: 100
    },
    containerInput:{
        marginBottom: 15
    },

    input:{
        backgroundColor: COLORS.gray5,
        padding: 10,
        borderRadius: 6
    },

    footer:{
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row"
    },
    footerLink:{
        color: COLORS.blue
    }


}