import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { TransactionList } from "./transaction/TransactionList";
import { TransactionCreate } from "./transaction/TransactionCreate";
import { TransactionEdit } from "./transaction/TransactionEdit";
import { TransactionShow } from "./transaction/TransactionShow";
import { BlockList } from "./block/BlockList";
import { BlockCreate } from "./block/BlockCreate";
import { BlockEdit } from "./block/BlockEdit";
import { BlockShow } from "./block/BlockShow";
import { ContractList } from "./contract/ContractList";
import { ContractCreate } from "./contract/ContractCreate";
import { ContractEdit } from "./contract/ContractEdit";
import { ContractShow } from "./contract/ContractShow";
import { RewardList } from "./reward/RewardList";
import { RewardCreate } from "./reward/RewardCreate";
import { RewardEdit } from "./reward/RewardEdit";
import { RewardShow } from "./reward/RewardShow";
import { PunishmentList } from "./punishment/PunishmentList";
import { PunishmentCreate } from "./punishment/PunishmentCreate";
import { PunishmentEdit } from "./punishment/PunishmentEdit";
import { PunishmentShow } from "./punishment/PunishmentShow";
import { EventList } from "./event/EventList";
import { EventCreate } from "./event/EventCreate";
import { EventEdit } from "./event/EventEdit";
import { EventShow } from "./event/EventShow";
import { RollupList } from "./rollup/RollupList";
import { RollupCreate } from "./rollup/RollupCreate";
import { RollupEdit } from "./rollup/RollupEdit";
import { RollupShow } from "./rollup/RollupShow";
import { WalletList } from "./wallet/WalletList";
import { WalletCreate } from "./wallet/WalletCreate";
import { WalletEdit } from "./wallet/WalletEdit";
import { WalletShow } from "./wallet/WalletShow";
import { AuctionList } from "./auction/AuctionList";
import { AuctionCreate } from "./auction/AuctionCreate";
import { AuctionEdit } from "./auction/AuctionEdit";
import { AuctionShow } from "./auction/AuctionShow";
import { TrendList } from "./trend/TrendList";
import { TrendCreate } from "./trend/TrendCreate";
import { TrendEdit } from "./trend/TrendEdit";
import { TrendShow } from "./trend/TrendShow";
import { BiddingList } from "./bidding/BiddingList";
import { BiddingCreate } from "./bidding/BiddingCreate";
import { BiddingEdit } from "./bidding/BiddingEdit";
import { BiddingShow } from "./bidding/BiddingShow";
import { ZeroKnowledgeProofList } from "./zeroKnowledgeProof/ZeroKnowledgeProofList";
import { ZeroKnowledgeProofCreate } from "./zeroKnowledgeProof/ZeroKnowledgeProofCreate";
import { ZeroKnowledgeProofEdit } from "./zeroKnowledgeProof/ZeroKnowledgeProofEdit";
import { ZeroKnowledgeProofShow } from "./zeroKnowledgeProof/ZeroKnowledgeProofShow";
import { TokenList } from "./token/TokenList";
import { TokenCreate } from "./token/TokenCreate";
import { TokenEdit } from "./token/TokenEdit";
import { TokenShow } from "./token/TokenShow";
import { DashboardList } from "./dashboard/DashboardList";
import { DashboardCreate } from "./dashboard/DashboardCreate";
import { DashboardEdit } from "./dashboard/DashboardEdit";
import { DashboardShow } from "./dashboard/DashboardShow";
import { GasList } from "./gas/GasList";
import { GasCreate } from "./gas/GasCreate";
import { GasEdit } from "./gas/GasEdit";
import { GasShow } from "./gas/GasShow";
import { MasterNodeList } from "./masterNode/MasterNodeList";
import { MasterNodeCreate } from "./masterNode/MasterNodeCreate";
import { MasterNodeEdit } from "./masterNode/MasterNodeEdit";
import { MasterNodeShow } from "./masterNode/MasterNodeShow";
import { Layer2TransactionList } from "./layer2Transaction/Layer2TransactionList";
import { Layer2TransactionCreate } from "./layer2Transaction/Layer2TransactionCreate";
import { Layer2TransactionEdit } from "./layer2Transaction/Layer2TransactionEdit";
import { Layer2TransactionShow } from "./layer2Transaction/Layer2TransactionShow";
import { InsightList } from "./insight/InsightList";
import { InsightCreate } from "./insight/InsightCreate";
import { InsightEdit } from "./insight/InsightEdit";
import { InsightShow } from "./insight/InsightShow";
import { MultiSigList } from "./multiSig/MultiSigList";
import { MultiSigCreate } from "./multiSig/MultiSigCreate";
import { MultiSigEdit } from "./multiSig/MultiSigEdit";
import { MultiSigShow } from "./multiSig/MultiSigShow";
import { AddressList } from "./address/AddressList";
import { AddressCreate } from "./address/AddressCreate";
import { AddressEdit } from "./address/AddressEdit";
import { AddressShow } from "./address/AddressShow";
import { ShardList } from "./shard/ShardList";
import { ShardCreate } from "./shard/ShardCreate";
import { ShardEdit } from "./shard/ShardEdit";
import { ShardShow } from "./shard/ShardShow";
import { AnalyticList } from "./analytic/AnalyticList";
import { AnalyticCreate } from "./analytic/AnalyticCreate";
import { AnalyticEdit } from "./analytic/AnalyticEdit";
import { AnalyticShow } from "./analytic/AnalyticShow";
import { LogList } from "./log/LogList";
import { LogCreate } from "./log/LogCreate";
import { LogEdit } from "./log/LogEdit";
import { LogShow } from "./log/LogShow";
import { ReportList } from "./report/ReportList";
import { ReportCreate } from "./report/ReportCreate";
import { ReportEdit } from "./report/ReportEdit";
import { ReportShow } from "./report/ReportShow";
import { MetricList } from "./metric/MetricList";
import { MetricCreate } from "./metric/MetricCreate";
import { MetricEdit } from "./metric/MetricEdit";
import { MetricShow } from "./metric/MetricShow";
import { MinerList } from "./miner/MinerList";
import { MinerCreate } from "./miner/MinerCreate";
import { MinerEdit } from "./miner/MinerEdit";
import { MinerShow } from "./miner/MinerShow";
import { SessionList } from "./session/SessionList";
import { SessionCreate } from "./session/SessionCreate";
import { SessionEdit } from "./session/SessionEdit";
import { SessionShow } from "./session/SessionShow";
import { UncleList } from "./uncle/UncleList";
import { UncleCreate } from "./uncle/UncleCreate";
import { UncleEdit } from "./uncle/UncleEdit";
import { UncleShow } from "./uncle/UncleShow";
import { ActivityLogList } from "./activityLog/ActivityLogList";
import { ActivityLogCreate } from "./activityLog/ActivityLogCreate";
import { ActivityLogEdit } from "./activityLog/ActivityLogEdit";
import { ActivityLogShow } from "./activityLog/ActivityLogShow";
import { TagList } from "./tag/TagList";
import { TagCreate } from "./tag/TagCreate";
import { TagEdit } from "./tag/TagEdit";
import { TagShow } from "./tag/TagShow";
import { TopicList } from "./topic/TopicList";
import { TopicCreate } from "./topic/TopicCreate";
import { TopicEdit } from "./topic/TopicEdit";
import { TopicShow } from "./topic/TopicShow";
import { CrowdfundingList } from "./crowdfunding/CrowdfundingList";
import { CrowdfundingCreate } from "./crowdfunding/CrowdfundingCreate";
import { CrowdfundingEdit } from "./crowdfunding/CrowdfundingEdit";
import { CrowdfundingShow } from "./crowdfunding/CrowdfundingShow";
import { SubscriptionList } from "./subscription/SubscriptionList";
import { SubscriptionCreate } from "./subscription/SubscriptionCreate";
import { SubscriptionEdit } from "./subscription/SubscriptionEdit";
import { SubscriptionShow } from "./subscription/SubscriptionShow";
import { SidechainList } from "./sidechain/SidechainList";
import { SidechainCreate } from "./sidechain/SidechainCreate";
import { SidechainEdit } from "./sidechain/SidechainEdit";
import { SidechainShow } from "./sidechain/SidechainShow";
import { InternalTransactionList } from "./internalTransaction/InternalTransactionList";
import { InternalTransactionCreate } from "./internalTransaction/InternalTransactionCreate";
import { InternalTransactionEdit } from "./internalTransaction/InternalTransactionEdit";
import { InternalTransactionShow } from "./internalTransaction/InternalTransactionShow";
import { OracleList } from "./oracle/OracleList";
import { OracleCreate } from "./oracle/OracleCreate";
import { OracleEdit } from "./oracle/OracleEdit";
import { OracleShow } from "./oracle/OracleShow";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { NonceList } from "./nonce/NonceList";
import { NonceCreate } from "./nonce/NonceCreate";
import { NonceEdit } from "./nonce/NonceEdit";
import { NonceShow } from "./nonce/NonceShow";
import { BridgeList } from "./bridge/BridgeList";
import { BridgeCreate } from "./bridge/BridgeCreate";
import { BridgeEdit } from "./bridge/BridgeEdit";
import { BridgeShow } from "./bridge/BridgeShow";
import { ChainList } from "./chain/ChainList";
import { ChainCreate } from "./chain/ChainCreate";
import { ChainEdit } from "./chain/ChainEdit";
import { ChainShow } from "./chain/ChainShow";
import { RoleList } from "./role/RoleList";
import { RoleCreate } from "./role/RoleCreate";
import { RoleEdit } from "./role/RoleEdit";
import { RoleShow } from "./role/RoleShow";
import { TransactionAuditList } from "./transactionAudit/TransactionAuditList";
import { TransactionAuditCreate } from "./transactionAudit/TransactionAuditCreate";
import { TransactionAuditEdit } from "./transactionAudit/TransactionAuditEdit";
import { TransactionAuditShow } from "./transactionAudit/TransactionAuditShow";
import { PermissionList } from "./permission/PermissionList";
import { PermissionCreate } from "./permission/PermissionCreate";
import { PermissionEdit } from "./permission/PermissionEdit";
import { PermissionShow } from "./permission/PermissionShow";
import { GrantList } from "./grant/GrantList";
import { GrantCreate } from "./grant/GrantCreate";
import { GrantEdit } from "./grant/GrantEdit";
import { GrantShow } from "./grant/GrantShow";
import { ValidatorList } from "./validator/ValidatorList";
import { ValidatorCreate } from "./validator/ValidatorCreate";
import { ValidatorEdit } from "./validator/ValidatorEdit";
import { ValidatorShow } from "./validator/ValidatorShow";
import { SecurityIncidentList } from "./securityIncident/SecurityIncidentList";
import { SecurityIncidentCreate } from "./securityIncident/SecurityIncidentCreate";
import { SecurityIncidentEdit } from "./securityIncident/SecurityIncidentEdit";
import { SecurityIncidentShow } from "./securityIncident/SecurityIncidentShow";
import { DonationList } from "./donation/DonationList";
import { DonationCreate } from "./donation/DonationCreate";
import { DonationEdit } from "./donation/DonationEdit";
import { DonationShow } from "./donation/DonationShow";
import { PendingTransactionList } from "./pendingTransaction/PendingTransactionList";
import { PendingTransactionCreate } from "./pendingTransaction/PendingTransactionCreate";
import { PendingTransactionEdit } from "./pendingTransaction/PendingTransactionEdit";
import { PendingTransactionShow } from "./pendingTransaction/PendingTransactionShow";
import { CrossChainTransactionList } from "./crossChainTransaction/CrossChainTransactionList";
import { CrossChainTransactionCreate } from "./crossChainTransaction/CrossChainTransactionCreate";
import { CrossChainTransactionEdit } from "./crossChainTransaction/CrossChainTransactionEdit";
import { CrossChainTransactionShow } from "./crossChainTransaction/CrossChainTransactionShow";
import { PriceFeedList } from "./priceFeed/PriceFeedList";
import { PriceFeedCreate } from "./priceFeed/PriceFeedCreate";
import { PriceFeedEdit } from "./priceFeed/PriceFeedEdit";
import { PriceFeedShow } from "./priceFeed/PriceFeedShow";
import { ReceiptList } from "./receipt/ReceiptList";
import { ReceiptCreate } from "./receipt/ReceiptCreate";
import { ReceiptEdit } from "./receipt/ReceiptEdit";
import { ReceiptShow } from "./receipt/ReceiptShow";
import { OffChainDataList } from "./offChainData/OffChainDataList";
import { OffChainDataCreate } from "./offChainData/OffChainDataCreate";
import { OffChainDataEdit } from "./offChainData/OffChainDataEdit";
import { OffChainDataShow } from "./offChainData/OffChainDataShow";
import { AmlList } from "./aml/AmlList";
import { AmlCreate } from "./aml/AmlCreate";
import { AmlEdit } from "./aml/AmlEdit";
import { AmlShow } from "./aml/AmlShow";
import { VoteList } from "./vote/VoteList";
import { VoteCreate } from "./vote/VoteCreate";
import { VoteEdit } from "./vote/VoteEdit";
import { VoteShow } from "./vote/VoteShow";
import { MessageList } from "./message/MessageList";
import { MessageCreate } from "./message/MessageCreate";
import { MessageEdit } from "./message/MessageEdit";
import { MessageShow } from "./message/MessageShow";
import { SyncStatusList } from "./syncStatus/SyncStatusList";
import { SyncStatusCreate } from "./syncStatus/SyncStatusCreate";
import { SyncStatusEdit } from "./syncStatus/SyncStatusEdit";
import { SyncStatusShow } from "./syncStatus/SyncStatusShow";
import { ForkList } from "./fork/ForkList";
import { ForkCreate } from "./fork/ForkCreate";
import { ForkEdit } from "./fork/ForkEdit";
import { ForkShow } from "./fork/ForkShow";
import { NftList } from "./nft/NftList";
import { NftCreate } from "./nft/NftCreate";
import { NftEdit } from "./nft/NftEdit";
import { NftShow } from "./nft/NftShow";
import { NodeList } from "./node/NodeList";
import { NodeCreate } from "./node/NodeCreate";
import { NodeEdit } from "./node/NodeEdit";
import { NodeShow } from "./node/NodeShow";
import { InsuranceList } from "./insurance/InsuranceList";
import { InsuranceCreate } from "./insurance/InsuranceCreate";
import { InsuranceEdit } from "./insurance/InsuranceEdit";
import { InsuranceShow } from "./insurance/InsuranceShow";
import { PeerList } from "./peer/PeerList";
import { PeerCreate } from "./peer/PeerCreate";
import { PeerEdit } from "./peer/PeerEdit";
import { PeerShow } from "./peer/PeerShow";
import { TransactionFeeList } from "./transactionFee/TransactionFeeList";
import { TransactionFeeCreate } from "./transactionFee/TransactionFeeCreate";
import { TransactionFeeEdit } from "./transactionFee/TransactionFeeEdit";
import { TransactionFeeShow } from "./transactionFee/TransactionFeeShow";
import { ValidatorRewardList } from "./validatorReward/ValidatorRewardList";
import { ValidatorRewardCreate } from "./validatorReward/ValidatorRewardCreate";
import { ValidatorRewardEdit } from "./validatorReward/ValidatorRewardEdit";
import { ValidatorRewardShow } from "./validatorReward/ValidatorRewardShow";
import { TokenTransferList } from "./tokenTransfer/TokenTransferList";
import { TokenTransferCreate } from "./tokenTransfer/TokenTransferCreate";
import { TokenTransferEdit } from "./tokenTransfer/TokenTransferEdit";
import { TokenTransferShow } from "./tokenTransfer/TokenTransferShow";
import { TokenBalanceList } from "./tokenBalance/TokenBalanceList";
import { TokenBalanceCreate } from "./tokenBalance/TokenBalanceCreate";
import { TokenBalanceEdit } from "./tokenBalance/TokenBalanceEdit";
import { TokenBalanceShow } from "./tokenBalance/TokenBalanceShow";
import { ComplianceList } from "./compliance/ComplianceList";
import { ComplianceCreate } from "./compliance/ComplianceCreate";
import { ComplianceEdit } from "./compliance/ComplianceEdit";
import { ComplianceShow } from "./compliance/ComplianceShow";
import { BugBountyList } from "./bugBounty/BugBountyList";
import { BugBountyCreate } from "./bugBounty/BugBountyCreate";
import { BugBountyEdit } from "./bugBounty/BugBountyEdit";
import { BugBountyShow } from "./bugBounty/BugBountyShow";
import { MarketplaceList } from "./marketplace/MarketplaceList";
import { MarketplaceCreate } from "./marketplace/MarketplaceCreate";
import { MarketplaceEdit } from "./marketplace/MarketplaceEdit";
import { MarketplaceShow } from "./marketplace/MarketplaceShow";
import { ProposalList } from "./proposal/ProposalList";
import { ProposalCreate } from "./proposal/ProposalCreate";
import { ProposalEdit } from "./proposal/ProposalEdit";
import { ProposalShow } from "./proposal/ProposalShow";
import { OrphanedBlockList } from "./orphanedBlock/OrphanedBlockList";
import { OrphanedBlockCreate } from "./orphanedBlock/OrphanedBlockCreate";
import { OrphanedBlockEdit } from "./orphanedBlock/OrphanedBlockEdit";
import { OrphanedBlockShow } from "./orphanedBlock/OrphanedBlockShow";
import { KycList } from "./kyc/KycList";
import { KycCreate } from "./kyc/KycCreate";
import { KycEdit } from "./kyc/KycEdit";
import { KycShow } from "./kyc/KycShow";
import { ReputationList } from "./reputation/ReputationList";
import { ReputationCreate } from "./reputation/ReputationCreate";
import { ReputationEdit } from "./reputation/ReputationEdit";
import { ReputationShow } from "./reputation/ReputationShow";
import { StakingList } from "./staking/StakingList";
import { StakingCreate } from "./staking/StakingCreate";
import { StakingEdit } from "./staking/StakingEdit";
import { StakingShow } from "./staking/StakingShow";
import { NetworkList } from "./network/NetworkList";
import { NetworkCreate } from "./network/NetworkCreate";
import { NetworkEdit } from "./network/NetworkEdit";
import { NetworkShow } from "./network/NetworkShow";
import { AlertList } from "./alert/AlertList";
import { AlertCreate } from "./alert/AlertCreate";
import { AlertEdit } from "./alert/AlertEdit";
import { AlertShow } from "./alert/AlertShow";
import { ValidatorSlashList } from "./validatorSlash/ValidatorSlashList";
import { ValidatorSlashCreate } from "./validatorSlash/ValidatorSlashCreate";
import { ValidatorSlashEdit } from "./validatorSlash/ValidatorSlashEdit";
import { ValidatorSlashShow } from "./validatorSlash/ValidatorSlashShow";
import { GovernanceList } from "./governance/GovernanceList";
import { GovernanceCreate } from "./governance/GovernanceCreate";
import { GovernanceEdit } from "./governance/GovernanceEdit";
import { GovernanceShow } from "./governance/GovernanceShow";
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
        title={"EthereumTransactionExplorer"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Transaction"
          list={TransactionList}
          edit={TransactionEdit}
          create={TransactionCreate}
          show={TransactionShow}
        />
        <Resource
          name="Block"
          list={BlockList}
          edit={BlockEdit}
          create={BlockCreate}
          show={BlockShow}
        />
        <Resource
          name="Contract"
          list={ContractList}
          edit={ContractEdit}
          create={ContractCreate}
          show={ContractShow}
        />
        <Resource
          name="Reward"
          list={RewardList}
          edit={RewardEdit}
          create={RewardCreate}
          show={RewardShow}
        />
        <Resource
          name="Punishment"
          list={PunishmentList}
          edit={PunishmentEdit}
          create={PunishmentCreate}
          show={PunishmentShow}
        />
        <Resource
          name="Event"
          list={EventList}
          edit={EventEdit}
          create={EventCreate}
          show={EventShow}
        />
        <Resource
          name="Rollup"
          list={RollupList}
          edit={RollupEdit}
          create={RollupCreate}
          show={RollupShow}
        />
        <Resource
          name="Wallet"
          list={WalletList}
          edit={WalletEdit}
          create={WalletCreate}
          show={WalletShow}
        />
        <Resource
          name="Auction"
          list={AuctionList}
          edit={AuctionEdit}
          create={AuctionCreate}
          show={AuctionShow}
        />
        <Resource
          name="Trend"
          list={TrendList}
          edit={TrendEdit}
          create={TrendCreate}
          show={TrendShow}
        />
        <Resource
          name="Bidding"
          list={BiddingList}
          edit={BiddingEdit}
          create={BiddingCreate}
          show={BiddingShow}
        />
        <Resource
          name="ZeroKnowledgeProof"
          list={ZeroKnowledgeProofList}
          edit={ZeroKnowledgeProofEdit}
          create={ZeroKnowledgeProofCreate}
          show={ZeroKnowledgeProofShow}
        />
        <Resource
          name="Token"
          list={TokenList}
          edit={TokenEdit}
          create={TokenCreate}
          show={TokenShow}
        />
        <Resource
          name="Dashboard"
          list={DashboardList}
          edit={DashboardEdit}
          create={DashboardCreate}
          show={DashboardShow}
        />
        <Resource
          name="Gas"
          list={GasList}
          edit={GasEdit}
          create={GasCreate}
          show={GasShow}
        />
        <Resource
          name="MasterNode"
          list={MasterNodeList}
          edit={MasterNodeEdit}
          create={MasterNodeCreate}
          show={MasterNodeShow}
        />
        <Resource
          name="Layer2Transaction"
          list={Layer2TransactionList}
          edit={Layer2TransactionEdit}
          create={Layer2TransactionCreate}
          show={Layer2TransactionShow}
        />
        <Resource
          name="Insight"
          list={InsightList}
          edit={InsightEdit}
          create={InsightCreate}
          show={InsightShow}
        />
        <Resource
          name="MultiSig"
          list={MultiSigList}
          edit={MultiSigEdit}
          create={MultiSigCreate}
          show={MultiSigShow}
        />
        <Resource
          name="Address"
          list={AddressList}
          edit={AddressEdit}
          create={AddressCreate}
          show={AddressShow}
        />
        <Resource
          name="Shard"
          list={ShardList}
          edit={ShardEdit}
          create={ShardCreate}
          show={ShardShow}
        />
        <Resource
          name="Analytic"
          list={AnalyticList}
          edit={AnalyticEdit}
          create={AnalyticCreate}
          show={AnalyticShow}
        />
        <Resource
          name="Log"
          list={LogList}
          edit={LogEdit}
          create={LogCreate}
          show={LogShow}
        />
        <Resource
          name="Report"
          list={ReportList}
          edit={ReportEdit}
          create={ReportCreate}
          show={ReportShow}
        />
        <Resource
          name="Metric"
          list={MetricList}
          edit={MetricEdit}
          create={MetricCreate}
          show={MetricShow}
        />
        <Resource
          name="Miner"
          list={MinerList}
          edit={MinerEdit}
          create={MinerCreate}
          show={MinerShow}
        />
        <Resource
          name="Session"
          list={SessionList}
          edit={SessionEdit}
          create={SessionCreate}
          show={SessionShow}
        />
        <Resource
          name="Uncle"
          list={UncleList}
          edit={UncleEdit}
          create={UncleCreate}
          show={UncleShow}
        />
        <Resource
          name="ActivityLog"
          list={ActivityLogList}
          edit={ActivityLogEdit}
          create={ActivityLogCreate}
          show={ActivityLogShow}
        />
        <Resource
          name="Tag"
          list={TagList}
          edit={TagEdit}
          create={TagCreate}
          show={TagShow}
        />
        <Resource
          name="Topic"
          list={TopicList}
          edit={TopicEdit}
          create={TopicCreate}
          show={TopicShow}
        />
        <Resource
          name="Crowdfunding"
          list={CrowdfundingList}
          edit={CrowdfundingEdit}
          create={CrowdfundingCreate}
          show={CrowdfundingShow}
        />
        <Resource
          name="Subscription"
          list={SubscriptionList}
          edit={SubscriptionEdit}
          create={SubscriptionCreate}
          show={SubscriptionShow}
        />
        <Resource
          name="Sidechain"
          list={SidechainList}
          edit={SidechainEdit}
          create={SidechainCreate}
          show={SidechainShow}
        />
        <Resource
          name="InternalTransaction"
          list={InternalTransactionList}
          edit={InternalTransactionEdit}
          create={InternalTransactionCreate}
          show={InternalTransactionShow}
        />
        <Resource
          name="Oracle"
          list={OracleList}
          edit={OracleEdit}
          create={OracleCreate}
          show={OracleShow}
        />
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
        <Resource
          name="Nonce"
          list={NonceList}
          edit={NonceEdit}
          create={NonceCreate}
          show={NonceShow}
        />
        <Resource
          name="Bridge"
          list={BridgeList}
          edit={BridgeEdit}
          create={BridgeCreate}
          show={BridgeShow}
        />
        <Resource
          name="Chain"
          list={ChainList}
          edit={ChainEdit}
          create={ChainCreate}
          show={ChainShow}
        />
        <Resource
          name="Role"
          list={RoleList}
          edit={RoleEdit}
          create={RoleCreate}
          show={RoleShow}
        />
        <Resource
          name="TransactionAudit"
          list={TransactionAuditList}
          edit={TransactionAuditEdit}
          create={TransactionAuditCreate}
          show={TransactionAuditShow}
        />
        <Resource
          name="Permission"
          list={PermissionList}
          edit={PermissionEdit}
          create={PermissionCreate}
          show={PermissionShow}
        />
        <Resource
          name="Grant"
          list={GrantList}
          edit={GrantEdit}
          create={GrantCreate}
          show={GrantShow}
        />
        <Resource
          name="Validator"
          list={ValidatorList}
          edit={ValidatorEdit}
          create={ValidatorCreate}
          show={ValidatorShow}
        />
        <Resource
          name="SecurityIncident"
          list={SecurityIncidentList}
          edit={SecurityIncidentEdit}
          create={SecurityIncidentCreate}
          show={SecurityIncidentShow}
        />
        <Resource
          name="Donation"
          list={DonationList}
          edit={DonationEdit}
          create={DonationCreate}
          show={DonationShow}
        />
        <Resource
          name="PendingTransaction"
          list={PendingTransactionList}
          edit={PendingTransactionEdit}
          create={PendingTransactionCreate}
          show={PendingTransactionShow}
        />
        <Resource
          name="CrossChainTransaction"
          list={CrossChainTransactionList}
          edit={CrossChainTransactionEdit}
          create={CrossChainTransactionCreate}
          show={CrossChainTransactionShow}
        />
        <Resource
          name="PriceFeed"
          list={PriceFeedList}
          edit={PriceFeedEdit}
          create={PriceFeedCreate}
          show={PriceFeedShow}
        />
        <Resource
          name="Receipt"
          list={ReceiptList}
          edit={ReceiptEdit}
          create={ReceiptCreate}
          show={ReceiptShow}
        />
        <Resource
          name="OffChainData"
          list={OffChainDataList}
          edit={OffChainDataEdit}
          create={OffChainDataCreate}
          show={OffChainDataShow}
        />
        <Resource
          name="Aml"
          list={AmlList}
          edit={AmlEdit}
          create={AmlCreate}
          show={AmlShow}
        />
        <Resource
          name="Vote"
          list={VoteList}
          edit={VoteEdit}
          create={VoteCreate}
          show={VoteShow}
        />
        <Resource
          name="Message"
          list={MessageList}
          edit={MessageEdit}
          create={MessageCreate}
          show={MessageShow}
        />
        <Resource
          name="SyncStatus"
          list={SyncStatusList}
          edit={SyncStatusEdit}
          create={SyncStatusCreate}
          show={SyncStatusShow}
        />
        <Resource
          name="Fork"
          list={ForkList}
          edit={ForkEdit}
          create={ForkCreate}
          show={ForkShow}
        />
        <Resource
          name="Nft"
          list={NftList}
          edit={NftEdit}
          create={NftCreate}
          show={NftShow}
        />
        <Resource
          name="Node"
          list={NodeList}
          edit={NodeEdit}
          create={NodeCreate}
          show={NodeShow}
        />
        <Resource
          name="Insurance"
          list={InsuranceList}
          edit={InsuranceEdit}
          create={InsuranceCreate}
          show={InsuranceShow}
        />
        <Resource
          name="Peer"
          list={PeerList}
          edit={PeerEdit}
          create={PeerCreate}
          show={PeerShow}
        />
        <Resource
          name="TransactionFee"
          list={TransactionFeeList}
          edit={TransactionFeeEdit}
          create={TransactionFeeCreate}
          show={TransactionFeeShow}
        />
        <Resource
          name="ValidatorReward"
          list={ValidatorRewardList}
          edit={ValidatorRewardEdit}
          create={ValidatorRewardCreate}
          show={ValidatorRewardShow}
        />
        <Resource
          name="TokenTransfer"
          list={TokenTransferList}
          edit={TokenTransferEdit}
          create={TokenTransferCreate}
          show={TokenTransferShow}
        />
        <Resource
          name="TokenBalance"
          list={TokenBalanceList}
          edit={TokenBalanceEdit}
          create={TokenBalanceCreate}
          show={TokenBalanceShow}
        />
        <Resource
          name="Compliance"
          list={ComplianceList}
          edit={ComplianceEdit}
          create={ComplianceCreate}
          show={ComplianceShow}
        />
        <Resource
          name="BugBounty"
          list={BugBountyList}
          edit={BugBountyEdit}
          create={BugBountyCreate}
          show={BugBountyShow}
        />
        <Resource
          name="Marketplace"
          list={MarketplaceList}
          edit={MarketplaceEdit}
          create={MarketplaceCreate}
          show={MarketplaceShow}
        />
        <Resource
          name="Proposal"
          list={ProposalList}
          edit={ProposalEdit}
          create={ProposalCreate}
          show={ProposalShow}
        />
        <Resource
          name="OrphanedBlock"
          list={OrphanedBlockList}
          edit={OrphanedBlockEdit}
          create={OrphanedBlockCreate}
          show={OrphanedBlockShow}
        />
        <Resource
          name="Kyc"
          list={KycList}
          edit={KycEdit}
          create={KycCreate}
          show={KycShow}
        />
        <Resource
          name="Reputation"
          list={ReputationList}
          edit={ReputationEdit}
          create={ReputationCreate}
          show={ReputationShow}
        />
        <Resource
          name="Staking"
          list={StakingList}
          edit={StakingEdit}
          create={StakingCreate}
          show={StakingShow}
        />
        <Resource
          name="Network"
          list={NetworkList}
          edit={NetworkEdit}
          create={NetworkCreate}
          show={NetworkShow}
        />
        <Resource
          name="Alert"
          list={AlertList}
          edit={AlertEdit}
          create={AlertCreate}
          show={AlertShow}
        />
        <Resource
          name="ValidatorSlash"
          list={ValidatorSlashList}
          edit={ValidatorSlashEdit}
          create={ValidatorSlashCreate}
          show={ValidatorSlashShow}
        />
        <Resource
          name="Governance"
          list={GovernanceList}
          edit={GovernanceEdit}
          create={GovernanceCreate}
          show={GovernanceShow}
        />
      </Admin>
    </div>
  );
};

export default App;
