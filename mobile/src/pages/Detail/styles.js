import { StyleSheet } from "react-native";
import Constants from "expo-constants";

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: Constants.statusBarHeight + 20
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  headerText: {
    fontSize: 15,
    color: "#737380"
  },
  headerTextBold: {
    fontWeight: "bold"
  },
  title: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#13131a",
    marginBottom: 16,
    marginTop: 48,
    fontWeight: "bold"
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
    color: "#737380"
  },

  incidentsList: {
    marginTop: 32
  },
  incident: {
    padding: 24,
    borderRadius: 8,
    backgroundColor: "#fff",
    marginBottom: 16,
    marginTop: 48
  },
  incidentProprety: {
    fontSize: 14,
    color: "#41414d",
    fontWeight: "bold",
    marginTop: 8
  },
  incidentValue: {
    marginTop: 8,
    fontSize: 15,
    color: "#737380"
  },
  detailsButton: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  detailsButtonText: {
    color: "#e02041",
    fontSize: 15,
    fontWeight: "bold"
  },
  contactBox: {
    padding: 24,
    borderRadius: 8,
    backgroundColor: "#fff",
    marginBottom: 16
  },
  heroTitle: {
    fontWeight: "bold",
    fontSize: 20,
    color: "#13131a",
    lineHeight: 30
  },
  heroDescription: {
    fontSize: 15,
    color: "#737380",
    marginTop: 16
  },
  actions: {
    marginTop: 16,
    flexDirection: "row",
    justifyContent: "space-between"
  },
  action: {
    backgroundColor: "#e02041",
    borderRadius: 8,
    height: 59,
    width: "48%",
    alignItems: "center",
    justifyContent: "center"
  },
  actionText: {
    color: "#FFF",
    fontSize: 15,
    fontWeight: "bold"
  }
});
