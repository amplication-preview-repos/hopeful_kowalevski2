import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { ConfigurationList } from "./configuration/ConfigurationList";
import { ConfigurationCreate } from "./configuration/ConfigurationCreate";
import { ConfigurationEdit } from "./configuration/ConfigurationEdit";
import { ConfigurationShow } from "./configuration/ConfigurationShow";
import { DmcaRequestList } from "./dmcaRequest/DmcaRequestList";
import { DmcaRequestCreate } from "./dmcaRequest/DmcaRequestCreate";
import { DmcaRequestEdit } from "./dmcaRequest/DmcaRequestEdit";
import { DmcaRequestShow } from "./dmcaRequest/DmcaRequestShow";
import { PlatformList } from "./platform/PlatformList";
import { PlatformCreate } from "./platform/PlatformCreate";
import { PlatformEdit } from "./platform/PlatformEdit";
import { PlatformShow } from "./platform/PlatformShow";
import { ContentList } from "./content/ContentList";
import { ContentCreate } from "./content/ContentCreate";
import { ContentEdit } from "./content/ContentEdit";
import { ContentShow } from "./content/ContentShow";
import { LogList } from "./log/LogList";
import { LogCreate } from "./log/LogCreate";
import { LogEdit } from "./log/LogEdit";
import { LogShow } from "./log/LogShow";
import { ScrapingConfigurationList } from "./scrapingConfiguration/ScrapingConfigurationList";
import { ScrapingConfigurationCreate } from "./scrapingConfiguration/ScrapingConfigurationCreate";
import { ScrapingConfigurationEdit } from "./scrapingConfiguration/ScrapingConfigurationEdit";
import { ScrapingConfigurationShow } from "./scrapingConfiguration/ScrapingConfigurationShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"DMCA Automation System"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Configuration"
          list={ConfigurationList}
          edit={ConfigurationEdit}
          create={ConfigurationCreate}
          show={ConfigurationShow}
        />
        <Resource
          name="DmcaRequest"
          list={DmcaRequestList}
          edit={DmcaRequestEdit}
          create={DmcaRequestCreate}
          show={DmcaRequestShow}
        />
        <Resource
          name="Platform"
          list={PlatformList}
          edit={PlatformEdit}
          create={PlatformCreate}
          show={PlatformShow}
        />
        <Resource
          name="Content"
          list={ContentList}
          edit={ContentEdit}
          create={ContentCreate}
          show={ContentShow}
        />
        <Resource
          name="Log"
          list={LogList}
          edit={LogEdit}
          create={LogCreate}
          show={LogShow}
        />
        <Resource
          name="ScrapingConfiguration"
          list={ScrapingConfigurationList}
          edit={ScrapingConfigurationEdit}
          create={ScrapingConfigurationCreate}
          show={ScrapingConfigurationShow}
        />
      </Admin>
    </div>
  );
};

export default App;
