import {
  Alert,
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useGetSupporters } from "../../services";
import { ListItem } from "./ListItem/";
import { useState } from "react";
import { CounterView } from "./CounterView";
import { Avatar, Button } from "../../components";
import { AvatarWithName } from "./AvatarWithName";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
    padding: 16,
  },
  textWrapper: { gap: 4, paddingBottom: 16 },
  title: {
    fontSize: 24,
    fontWeight: "700",
  },
  description: {
    fontSize: 16,
    color: "#666",
  },
  contentContainerStyle: {
    gap: 16,
  },
  headerContainer: {
    paddingTop: 16,
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  scrollView: {
    gap: 8,
  },
  counterViewContainer: {
    alignSelf: "flex-start",
  },
  buttonContainer: {
    paddingBottom: 24,
  },
});

const HomeScreen = () => {
  const { data: supportersData } = useGetSupporters();

  const [idsSelected, setIdsSelected] = useState<string[]>([]);

  const toggleSelect = (id: string) => {
    setIdsSelected((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  const selectedSupporters = supportersData?.contacts.filter((item) =>
    idsSelected.includes(item.id)
  );

  const HeaderComponent = () => {
    return (
      <View style={styles.textWrapper}>
        <Text style={styles.title}>Select 6+ supporters</Text>
        <Text style={styles.description}>
          Invite your biggest fans. Grandparents, aunts, uncles, and friends are
          common supporters. We'll send an invite for you.
        </Text>

        <View style={styles.headerContainer}>
          <View style={styles.counterViewContainer}>
            <CounterView number={selectedSupporters?.length} />
          </View>

          <ScrollView horizontal contentContainerStyle={styles.scrollView}>
            {selectedSupporters?.map((item) => (
              <AvatarWithName
                key={item.id}
                title={`${item.firstName} ${item.lastName}`}
              />
            ))}
          </ScrollView>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        contentContainerStyle={styles.contentContainerStyle}
        data={supportersData?.contacts}
        ListHeaderComponent={HeaderComponent}
        renderItem={({ item }) => (
          <ListItem
            onPress={() => toggleSelect(item.id)}
            isSelected={idsSelected.includes(item.id)}
            title={`${item.firstName} ${item.lastName}`}
            description={item.number}
          />
        )}
      />
      <View style={styles.buttonContainer}>
        <Button
          onPress={() => Alert.alert("FINISHED")}
          disabled={selectedSupporters?.length < 6}
        />
      </View>
    </View>
  );
};

export { HomeScreen };
