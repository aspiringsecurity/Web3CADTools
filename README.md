# FIL CAD

Developer tools to enable CAD designers and Web3 artists with on-chain and open source raster graphics editor for free form drawing, editing using Filecoin and Web3 ecosystem tools.

We wish to enable constructionist learning by empowering Web3 designers, game developer community and DeSci educators to build design assets and empower their artistic aspirations utilizing filecoin/IPFS's strengths in information eco-system.

Web3 CAD tools's normal interface is split into five sections:

- Toolbox, containing the various basic tools (see below) and application controls (undo, save, new, print)

- Canvas, where the images are drawn and edited

- Color palette, where colors can be chosen (when applicable to the current tool)

- Selector, providing various selectable objects (e.g., brushes, fonts or sub-tools, depending on the current tool)

- Information area, where instructions, tips and encouragement are provided


Design experiments to try using FIL CAD

- Add stamps and pictures;

- Import images from IPFS and upload images as NFTs to IPFS via NFT.Storage

-  Add notes using pencil and save them to RDBMS using Tableland


# Blockchain Eco-system

We are using Filecoin Blockchain and Data Tools, NFT.storage, Tablelan, drand, bacalhau, Filecoin Virtual Machine, Helia with electron and OSS Web3 tools.

# NFT.Storage

We are developing a dapp using NFT.storage that let us export the CAD (Computer Aided Design) file generated from Web3 CAD tools as an NFT and upload it to IPFS using NFT.Storage. We are extending NFTUp dapp both for Post PC and PC devices using ionic low code, no code framework and are using FVM Calc for tabulation, organization and export of the CAD file output as an NFT. Please visit https://github.com/aspiringsecurity/Web3CADTools/tree/main/design-nft-storage-to-ipfs


# Filecoin Virtual Machine

FVM enables us to use composable blocks exposed through standardized interfaces, enabling the construction of picture archiving and CAD imaging files. This improves better outcomes in the development of design assets and promotes reusability and re-purposability, saving time and costs. FVM Modules:

- Creating an NFT for the CAD file on the Filecoin Virtual Machine (FVM / FEVM) with Bacalhau Stable Diffusion. Please visit: https://github.com/aspiringsecurity/Web3CADTools/tree/main/bacalhau-nft-filecoin

- FVM Calc, an open source analytics tool to enable data tabulation, visualization, organization, collaboration for CAD asset files on Filecoin Virtual Machine. Link: https://github.com/aspiringsecurity/Web3CADTools/tree/main/design-nft-storage-to-ipfs/filecoin-spreadsheet-data-tools


# Tableland
We are using tableland to develop a notes application and are maintaining it along with CAD file assets. This enables us to make the CAD asset files searchable, sortable and enables us to reuse and repurpose them for user training. Tableland enables us to document the CAD file output files and store the notes in an RDBMS (SQL) type database. Please visit https://github.com/aspiringsecurity/Web3CADTools/tree/main/Web3CAD-suite/Tableland-CAD-Notes-dapp


# Filecoin Data Tools
We are developing FVM Calc, an open-source analytics tool and an OSS spreadsheet to enable data tabulation, visualization, organization, collaboration for CAD asset files on Filecoin network.

Link: https://github.com/aspiringsecurity/Web3CADTools/tree/main/design-nft-storage-to-ipfs/filecoin-spreadsheet-data-tools

# Bacalhau
We are utilizing Bacalhau for 2 key modules in FIL CAD:

- Creating an NFT for the CAD file on the Filecoin Virtual Machine (FVM / FEVM) with Bacalhau Stable Diffusion. Please visit https://github.com/aspiringsecurity/Web3CADTools/tree/main/bacalhau-nft-filecoin

- Invoice Automation: We have developed an invoice dapp with integration with bacalhau for just in time invoicing for design contracts. Please visit https://github.com/aspiringsecurity/Web3CADTools/tree/main/bacalhau-nft-filecoin/bacalhau-invoice-automation
  

# Filecoin saturn dapp for discovery and retrieval of NFTs uploaded to IPFS via NFT.Storage

We are developing a socially scalable and open-source metadata retrieval, indexing, and management tooling for decentralized CAD asset development and user training. Bandwidth is a major issue in South Asian classrooms and Filecoin Data tools fit right at the spot for quick data retrieval where learning via video streaming is not possible due to high latency or unavailability of a network for streaming.

Please visit https://github.com/aspiringsecurity/Web3CADTools/tree/main/filecoin-cdn-saturn-spreadsheet


# drand 

Gantt Chart is a solidity contract and accompanying web application to demonstrate how lab assignments can be allocated using the drand randomness provided by the prevrandao opcode. We are extending the draffle dapp example provided by drand and are integrating with our own FILecoin Data Tool, FVMCALC, an open source spreadsheet engine, which acts as a leaderboard and also an examiner for CAD file submissions. Please visit https://github.com/aspiringsecurity/Web3CADTools/tree/main/design-nft-storage-to-ipfs/filecoin-spreadsheet-data-tools/allocate-lab-assignments-drand


# IPFS

We are developing a dapp using Helia (JS implementation of IPFS) along with NFT.storage that let us export the CAD (Computer Aided Design) file generated from Web3 CAD tools as an NFT and upload it to IPFS using NFT.Storage. We are using the Electron example of Helia and are adding features like File (Edit/Delete), Save, save As, Email and print using ionic Capacitor framework plugins to our dapp.

Please visit https://github.com/aspiringsecurity/Web3CADTools/tree/main/design-nft-storage-to-ipfs/cad-helia-electron
  
