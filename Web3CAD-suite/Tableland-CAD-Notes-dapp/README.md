# CAD Notes dapp using tableland 

We are using tableland to develop a notes application and are maintaining it along with CAD file assets. This enables us to make the CAD asset files searchable, sortable and enables us to reuse and repurpose them for user training. Tableland enables us to document the CAD file output files and store the notes in an RDBMS (SQL) type database.


We are also developing CAD notes dapp module to supplement CAD file metadata using Tableland for user training and also for gathering feedback on designs. We have extended the to do example provided by Tableland for developing the dapp.


### Steps

```bash
# install dependencies
$ npm install

# set validator address, default is http://localhost:8545
$ export VALIDATOR=http://tableland.com

# serve with hot reload at localhost:3000
$ npm run dev

# generate static project
$ npm run generate

# after generate serve the static project locally
$ npx nuxt start
```


