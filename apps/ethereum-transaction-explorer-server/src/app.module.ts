import { Module } from "@nestjs/common";
import { TransactionModule } from "./transaction/transaction.module";
import { BlockModule } from "./block/block.module";
import { ContractModule } from "./contract/contract.module";
import { RewardModule } from "./reward/reward.module";
import { PunishmentModule } from "./punishment/punishment.module";
import { EventModule } from "./event/event.module";
import { RollupModule } from "./rollup/rollup.module";
import { WalletModule } from "./wallet/wallet.module";
import { AuctionModule } from "./auction/auction.module";
import { TrendModule } from "./trend/trend.module";
import { BiddingModule } from "./bidding/bidding.module";
import { ZeroKnowledgeProofModule } from "./zeroKnowledgeProof/zeroKnowledgeProof.module";
import { TokenModule } from "./token/token.module";
import { DashboardModule } from "./dashboard/dashboard.module";
import { GasModule } from "./gas/gas.module";
import { MasterNodeModule } from "./masterNode/masterNode.module";
import { Layer2TransactionModule } from "./layer2Transaction/layer2Transaction.module";
import { InsightModule } from "./insight/insight.module";
import { MultiSigModule } from "./multiSig/multiSig.module";
import { AddressModule } from "./address/address.module";
import { ShardModule } from "./shard/shard.module";
import { AnalyticModule } from "./analytic/analytic.module";
import { LogModule } from "./log/log.module";
import { ReportModule } from "./report/report.module";
import { MetricModule } from "./metric/metric.module";
import { MinerModule } from "./miner/miner.module";
import { SessionModule } from "./session/session.module";
import { UncleModule } from "./uncle/uncle.module";
import { ActivityLogModule } from "./activityLog/activityLog.module";
import { TagModule } from "./tag/tag.module";
import { TopicModule } from "./topic/topic.module";
import { CrowdfundingModule } from "./crowdfunding/crowdfunding.module";
import { SubscriptionModule } from "./subscription/subscription.module";
import { SidechainModule } from "./sidechain/sidechain.module";
import { InternalTransactionModule } from "./internalTransaction/internalTransaction.module";
import { OracleModule } from "./oracle/oracle.module";
import { UserModule } from "./user/user.module";
import { NonceModule } from "./nonce/nonce.module";
import { BridgeModule } from "./bridge/bridge.module";
import { ChainModule } from "./chain/chain.module";
import { RoleModule } from "./role/role.module";
import { TransactionAuditModule } from "./transactionAudit/transactionAudit.module";
import { PermissionModule } from "./permission/permission.module";
import { GrantModule } from "./grant/grant.module";
import { ValidatorModule } from "./validator/validator.module";
import { SecurityIncidentModule } from "./securityIncident/securityIncident.module";
import { DonationModule } from "./donation/donation.module";
import { PendingTransactionModule } from "./pendingTransaction/pendingTransaction.module";
import { CrossChainTransactionModule } from "./crossChainTransaction/crossChainTransaction.module";
import { PriceFeedModule } from "./priceFeed/priceFeed.module";
import { ReceiptModule } from "./receipt/receipt.module";
import { OffChainDataModule } from "./offChainData/offChainData.module";
import { AmlModule } from "./aml/aml.module";
import { VoteModule } from "./vote/vote.module";
import { MessageModule } from "./message/message.module";
import { SyncStatusModule } from "./syncStatus/syncStatus.module";
import { ForkModule } from "./fork/fork.module";
import { NftModule } from "./nft/nft.module";
import { NodeModule } from "./node/node.module";
import { InsuranceModule } from "./insurance/insurance.module";
import { PeerModule } from "./peer/peer.module";
import { TransactionFeeModule } from "./transactionFee/transactionFee.module";
import { ValidatorRewardModule } from "./validatorReward/validatorReward.module";
import { TokenTransferModule } from "./tokenTransfer/tokenTransfer.module";
import { TokenBalanceModule } from "./tokenBalance/tokenBalance.module";
import { ComplianceModule } from "./compliance/compliance.module";
import { BugBountyModule } from "./bugBounty/bugBounty.module";
import { MarketplaceModule } from "./marketplace/marketplace.module";
import { ProposalModule } from "./proposal/proposal.module";
import { OrphanedBlockModule } from "./orphanedBlock/orphanedBlock.module";
import { KycModule } from "./kyc/kyc.module";
import { ReputationModule } from "./reputation/reputation.module";
import { StakingModule } from "./staking/staking.module";
import { NetworkModule } from "./network/network.module";
import { AlertModule } from "./alert/alert.module";
import { ValidatorSlashModule } from "./validatorSlash/validatorSlash.module";
import { GovernanceModule } from "./governance/governance.module";
import { HealthModule } from "./health/health.module";
import { PrismaModule } from "./prisma/prisma.module";
import { SecretsManagerModule } from "./providers/secrets/secretsManager.module";
import { ServeStaticModule } from "@nestjs/serve-static";
import { ServeStaticOptionsService } from "./serveStaticOptions.service";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { GraphQLModule } from "@nestjs/graphql";
import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";

@Module({
  controllers: [],
  imports: [
    TransactionModule,
    BlockModule,
    ContractModule,
    RewardModule,
    PunishmentModule,
    EventModule,
    RollupModule,
    WalletModule,
    AuctionModule,
    TrendModule,
    BiddingModule,
    ZeroKnowledgeProofModule,
    TokenModule,
    DashboardModule,
    GasModule,
    MasterNodeModule,
    Layer2TransactionModule,
    InsightModule,
    MultiSigModule,
    AddressModule,
    ShardModule,
    AnalyticModule,
    LogModule,
    ReportModule,
    MetricModule,
    MinerModule,
    SessionModule,
    UncleModule,
    ActivityLogModule,
    TagModule,
    TopicModule,
    CrowdfundingModule,
    SubscriptionModule,
    SidechainModule,
    InternalTransactionModule,
    OracleModule,
    UserModule,
    NonceModule,
    BridgeModule,
    ChainModule,
    RoleModule,
    TransactionAuditModule,
    PermissionModule,
    GrantModule,
    ValidatorModule,
    SecurityIncidentModule,
    DonationModule,
    PendingTransactionModule,
    CrossChainTransactionModule,
    PriceFeedModule,
    ReceiptModule,
    OffChainDataModule,
    AmlModule,
    VoteModule,
    MessageModule,
    SyncStatusModule,
    ForkModule,
    NftModule,
    NodeModule,
    InsuranceModule,
    PeerModule,
    TransactionFeeModule,
    ValidatorRewardModule,
    TokenTransferModule,
    TokenBalanceModule,
    ComplianceModule,
    BugBountyModule,
    MarketplaceModule,
    ProposalModule,
    OrphanedBlockModule,
    KycModule,
    ReputationModule,
    StakingModule,
    NetworkModule,
    AlertModule,
    ValidatorSlashModule,
    GovernanceModule,
    HealthModule,
    PrismaModule,
    SecretsManagerModule,
    ConfigModule.forRoot({ isGlobal: true }),
    ServeStaticModule.forRootAsync({
      useClass: ServeStaticOptionsService,
    }),
    GraphQLModule.forRootAsync<ApolloDriverConfig>({
      driver: ApolloDriver,
      useFactory: (configService: ConfigService) => {
        const playground = configService.get("GRAPHQL_PLAYGROUND");
        const introspection = configService.get("GRAPHQL_INTROSPECTION");
        return {
          autoSchemaFile: "schema.graphql",
          sortSchema: true,
          playground,
          introspection: playground || introspection,
        };
      },
      inject: [ConfigService],
      imports: [ConfigModule],
    }),
  ],
  providers: [],
})
export class AppModule {}
