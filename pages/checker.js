{/* <View style={styles.header}> 
       <TouchableOpacity style={styles.quizButton}
       onPress={() => setModalVisible(true)}>
          <Text style={styles.quizText}>Make Self assessment </Text>
        </TouchableOpacity>
</View>

      <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>Answer the following question to check how your are doing</Text>

              <Text style={styles.modalTextQuestion}>How am I feeling emotionally? Have I noticed persistent feelings of sadness, anxiety, or anger?</Text>
              <View style={styles.radio}>
              <Radio name='Sadness'/>
              <Radio name='Anxiety'/>
              <Radio name='Anger'/>
              </View>
             
              <Text style={styles.modalTextQuestion}>Are my thoughts generally positive or negative? Do I find myself caught in negative thinking patterns or overthinking?</Text>
              <View style={styles.radio}>
              <Radio name='Negative thinking'/>
              <Radio name='Overthinking'/>
              </View>
              
              <Text style={styles.modalTextQuestion}>Have there been changes in my eating, sleeping, or social habits? Am I engaging in activities I usually enjoy??</Text>
              <View style={styles.radio}>
              <Radio name='Yes'/>
              <Radio name='No'/>
              <Radio name='Neither'/>
              </View>
              <Text style={styles.modalTextQuestion}>Have I experienced unexplained physical symptoms, such as headaches, stomach aches, or fatigue?</Text>
              <View style={styles.radio}>
              <Radio name='Headaches'/>
              <Radio name='Stomach aches'/>
              <Radio name='Fatigue'/>
              </View>

              

              <TouchableOpacity
                style={{ ...styles.modelButton, backgroundColor: 'rgba(74, 8, 135, 0.557)' }}
                onPress={() => setModalVisible(!modalVisible)}>
                <Text style={styles.Text}>Submit your answer </Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
    </View>
  </View>  
    );
    } */}