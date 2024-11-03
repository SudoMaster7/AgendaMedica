import { COLORS, FONT_SIZE } from "../../constants/theme"

export const styles ={
    appointment: {
        backgroundColor: COLORS.white,
        flex: 1,
        padding: 12,
        borderWidth: 1,
        borderRadius: 25,
        borderColor: COLORS.green
    },
    logo:{
        width: 250,
        height: 100
    },
    name:{
        fontSize: FONT_SIZE.md,
        color: COLORS.black,
        marginBottom: 2,
    },
    specialty:{
        fontSize: FONT_SIZE.md,
        color: COLORS.black,
        marginBottom: 4,
    },
    icon:{
        width:25,
        height: 25
    },
    bookinDate:{
        fontSize: FONT_SIZE.sm,
        color: COLORS.green,
        marginTop: 3
    },
    bookinHour:{
        fontSize: FONT_SIZE.sm,
        color: COLORS.green,
        marginTop: 3
    },
    booking:{
        flexDirection: "row"
    },
    containerBooking:{
        flex: 1
    },
    containerButton:{
        marginTop: 5
    },
    container:{
        flexDirection: "row"
    }
}