# Smart Photo Booth

The goal of the project is to create a photobooth that can identify the people in the pictures in realtime, and intelligently tag and send the photos after they are taken. 

# Goal 
The goal of the project is to utilize Microsoft Cognitive Services, specifically its Face API, along with various Azure services to create a photobooth that is interesting architecturally, and fun to use.

# Project Scope
## Phase 1 - Setup and Face Training
- [ ] Create a DocumentDB, create a document of all guests (name, and email).
- [ ] Create a [Person Group](https://dev.projectoxford.ai/docs/services/563879b61984550e40cbbe8d/operations/563879b61984550f30395244), and store the groupId in the document
- [ ] For each ~200 guests in the DocDB, create a [Person](https://dev.projectoxford.ai/docs/services/563879b61984550e40cbbe8d/operations/563879b61984550f3039523c) entity, and store the PersonID back to DocDB
- [ ] Create a blob storage, and create "folders" with the personId as the name of each folder, Upload photos of guests in each folder
- [ ] Create a Azure function that gets triggered when a new file is uploaded to the blob storage and submits to [Person Face](https://dev.projectoxford.ai/docs/services/563879b61984550e40cbbe8d/operations/563879b61984550f3039523b) to be trained with the corresponding personId

## Phase 2 - Identification
- [ ] Acquire a bitstream from getUserMedia and display in a `canvas`.
- [ ] Find a sustainable way to feed the images to the [Face - Identify](https://dev.projectoxford.ai/docs/services/563879b61984550e40cbbe8d/operations/563879b61984550f30395239) API.
- [ ] Display the identities in a bounding box on screen.