import { ConfigurationService } from '@ghostfolio/api/services/configuration.service';
import { DataGatheringService } from '@ghostfolio/api/services/data-gathering.service';
import { DataProviderService } from '@ghostfolio/api/services/data-provider.service';
import { AlphaVantageService } from '@ghostfolio/api/services/data-provider/alpha-vantage/alpha-vantage.service';
import { GhostfolioScraperApiService } from '@ghostfolio/api/services/data-provider/ghostfolio-scraper-api/ghostfolio-scraper-api.service';
import { RakutenRapidApiService } from '@ghostfolio/api/services/data-provider/rakuten-rapid-api/rakuten-rapid-api.service';
import { YahooFinanceService } from '@ghostfolio/api/services/data-provider/yahoo-finance/yahoo-finance.service';
import { ExchangeRateDataService } from '@ghostfolio/api/services/exchange-rate-data.service';
import { ImpersonationService } from '@ghostfolio/api/services/impersonation.service';
import { PrismaService } from '@ghostfolio/api/services/prisma.service';
import { RulesService } from '@ghostfolio/api/services/rules.service';
import { Module } from '@nestjs/common';

import { CacheService } from '../cache/cache.service';
import { OrderService } from '../order/order.service';
import { RedisCacheModule } from '../redis-cache/redis-cache.module';
import { UserService } from '../user/user.service';
import { PortfolioController } from './portfolio.controller';
import { PortfolioService } from './portfolio.service';

@Module({
  imports: [RedisCacheModule],
  controllers: [PortfolioController],
  providers: [
    AlphaVantageService,
    CacheService,
    ConfigurationService,
    DataGatheringService,
    DataProviderService,
    ExchangeRateDataService,
    GhostfolioScraperApiService,
    ImpersonationService,
    OrderService,
    PortfolioService,
    PrismaService,
    RakutenRapidApiService,
    RulesService,
    UserService,
    YahooFinanceService
  ]
})
export class PortfolioModule {}
