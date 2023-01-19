/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";

export declare namespace TokenVesting {
  export type VestingScheduleStruct = {
    initialized: boolean;
    beneficiary: string;
    cliff: BigNumberish;
    start: BigNumberish;
    duration: BigNumberish;
    slicePeriodSeconds: BigNumberish;
    revocable: boolean;
    amountTotal: BigNumberish;
    released: BigNumberish;
    revoked: boolean;
  };

  export type VestingScheduleStructOutput = [
    boolean,
    string,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    boolean,
    BigNumber,
    BigNumber,
    boolean
  ] & {
    initialized: boolean;
    beneficiary: string;
    cliff: BigNumber;
    start: BigNumber;
    duration: BigNumber;
    slicePeriodSeconds: BigNumber;
    revocable: boolean;
    amountTotal: BigNumber;
    released: BigNumber;
    revoked: boolean;
  };
}

export interface MockTokenVestingInterface extends utils.Interface {
  contractName: "MockTokenVesting";
  functions: {
    "computeNextVestingScheduleIdForHolder(address)": FunctionFragment;
    "computeReleasableAmount(bytes32)": FunctionFragment;
    "computeVestingScheduleIdForAddressAndIndex(address,uint256)": FunctionFragment;
    "createVestingSchedule(address,uint256,uint256,uint256,uint256,bool,uint256)": FunctionFragment;
    "getLastVestingScheduleForHolder(address)": FunctionFragment;
    "getToken()": FunctionFragment;
    "getVestingIdAtIndex(uint256)": FunctionFragment;
    "getVestingSchedule(bytes32)": FunctionFragment;
    "getVestingScheduleByAddressAndIndex(address,uint256)": FunctionFragment;
    "getVestingSchedulesCount()": FunctionFragment;
    "getVestingSchedulesCountByBeneficiary(address)": FunctionFragment;
    "getVestingSchedulesTotalAmount()": FunctionFragment;
    "getWithdrawableAmount()": FunctionFragment;
    "owner()": FunctionFragment;
    "release(bytes32,uint256)": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "revoke(bytes32)": FunctionFragment;
    "setCurrentTime(uint256)": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
    "withdraw(uint256)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "computeNextVestingScheduleIdForHolder",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "computeReleasableAmount",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "computeVestingScheduleIdForAddressAndIndex",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "createVestingSchedule",
    values: [
      string,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      boolean,
      BigNumberish
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "getLastVestingScheduleForHolder",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "getToken", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "getVestingIdAtIndex",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getVestingSchedule",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "getVestingScheduleByAddressAndIndex",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getVestingSchedulesCount",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getVestingSchedulesCountByBeneficiary",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "getVestingSchedulesTotalAmount",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getWithdrawableAmount",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "release",
    values: [BytesLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "revoke", values: [BytesLike]): string;
  encodeFunctionData(
    functionFragment: "setCurrentTime",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "withdraw",
    values: [BigNumberish]
  ): string;

  decodeFunctionResult(
    functionFragment: "computeNextVestingScheduleIdForHolder",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "computeReleasableAmount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "computeVestingScheduleIdForAddressAndIndex",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "createVestingSchedule",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getLastVestingScheduleForHolder",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getToken", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getVestingIdAtIndex",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getVestingSchedule",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getVestingScheduleByAddressAndIndex",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getVestingSchedulesCount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getVestingSchedulesCountByBeneficiary",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getVestingSchedulesTotalAmount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getWithdrawableAmount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "release", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "revoke", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setCurrentTime",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "withdraw", data: BytesLike): Result;

  events: {
    "OwnershipTransferred(address,address)": EventFragment;
    "Released(uint256)": EventFragment;
    "Revoked()": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Released"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Revoked"): EventFragment;
}

export type OwnershipTransferredEvent = TypedEvent<
  [string, string],
  { previousOwner: string; newOwner: string }
>;

export type OwnershipTransferredEventFilter =
  TypedEventFilter<OwnershipTransferredEvent>;

export type ReleasedEvent = TypedEvent<[BigNumber], { amount: BigNumber }>;

export type ReleasedEventFilter = TypedEventFilter<ReleasedEvent>;

export type RevokedEvent = TypedEvent<[], {}>;

export type RevokedEventFilter = TypedEventFilter<RevokedEvent>;

export interface MockTokenVesting extends BaseContract {
  contractName: "MockTokenVesting";
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: MockTokenVestingInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    computeNextVestingScheduleIdForHolder(
      holder: string,
      overrides?: CallOverrides
    ): Promise<[string]>;

    computeReleasableAmount(
      vestingScheduleId: BytesLike,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    computeVestingScheduleIdForAddressAndIndex(
      holder: string,
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>;

    createVestingSchedule(
      _beneficiary: string,
      _start: BigNumberish,
      _cliff: BigNumberish,
      _duration: BigNumberish,
      _slicePeriodSeconds: BigNumberish,
      _revocable: boolean,
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    getLastVestingScheduleForHolder(
      holder: string,
      overrides?: CallOverrides
    ): Promise<[TokenVesting.VestingScheduleStructOutput]>;

    getToken(overrides?: CallOverrides): Promise<[string]>;

    getVestingIdAtIndex(
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>;

    getVestingSchedule(
      vestingScheduleId: BytesLike,
      overrides?: CallOverrides
    ): Promise<[TokenVesting.VestingScheduleStructOutput]>;

    getVestingScheduleByAddressAndIndex(
      holder: string,
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[TokenVesting.VestingScheduleStructOutput]>;

    getVestingSchedulesCount(overrides?: CallOverrides): Promise<[BigNumber]>;

    getVestingSchedulesCountByBeneficiary(
      _beneficiary: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getVestingSchedulesTotalAmount(
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getWithdrawableAmount(overrides?: CallOverrides): Promise<[BigNumber]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    release(
      vestingScheduleId: BytesLike,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    revoke(
      vestingScheduleId: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setCurrentTime(
      _time: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    withdraw(
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  computeNextVestingScheduleIdForHolder(
    holder: string,
    overrides?: CallOverrides
  ): Promise<string>;

  computeReleasableAmount(
    vestingScheduleId: BytesLike,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  computeVestingScheduleIdForAddressAndIndex(
    holder: string,
    index: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  createVestingSchedule(
    _beneficiary: string,
    _start: BigNumberish,
    _cliff: BigNumberish,
    _duration: BigNumberish,
    _slicePeriodSeconds: BigNumberish,
    _revocable: boolean,
    _amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  getLastVestingScheduleForHolder(
    holder: string,
    overrides?: CallOverrides
  ): Promise<TokenVesting.VestingScheduleStructOutput>;

  getToken(overrides?: CallOverrides): Promise<string>;

  getVestingIdAtIndex(
    index: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  getVestingSchedule(
    vestingScheduleId: BytesLike,
    overrides?: CallOverrides
  ): Promise<TokenVesting.VestingScheduleStructOutput>;

  getVestingScheduleByAddressAndIndex(
    holder: string,
    index: BigNumberish,
    overrides?: CallOverrides
  ): Promise<TokenVesting.VestingScheduleStructOutput>;

  getVestingSchedulesCount(overrides?: CallOverrides): Promise<BigNumber>;

  getVestingSchedulesCountByBeneficiary(
    _beneficiary: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getVestingSchedulesTotalAmount(overrides?: CallOverrides): Promise<BigNumber>;

  getWithdrawableAmount(overrides?: CallOverrides): Promise<BigNumber>;

  owner(overrides?: CallOverrides): Promise<string>;

  release(
    vestingScheduleId: BytesLike,
    amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  renounceOwnership(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  revoke(
    vestingScheduleId: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setCurrentTime(
    _time: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  transferOwnership(
    newOwner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  withdraw(
    amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    computeNextVestingScheduleIdForHolder(
      holder: string,
      overrides?: CallOverrides
    ): Promise<string>;

    computeReleasableAmount(
      vestingScheduleId: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    computeVestingScheduleIdForAddressAndIndex(
      holder: string,
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    createVestingSchedule(
      _beneficiary: string,
      _start: BigNumberish,
      _cliff: BigNumberish,
      _duration: BigNumberish,
      _slicePeriodSeconds: BigNumberish,
      _revocable: boolean,
      _amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    getLastVestingScheduleForHolder(
      holder: string,
      overrides?: CallOverrides
    ): Promise<TokenVesting.VestingScheduleStructOutput>;

    getToken(overrides?: CallOverrides): Promise<string>;

    getVestingIdAtIndex(
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    getVestingSchedule(
      vestingScheduleId: BytesLike,
      overrides?: CallOverrides
    ): Promise<TokenVesting.VestingScheduleStructOutput>;

    getVestingScheduleByAddressAndIndex(
      holder: string,
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<TokenVesting.VestingScheduleStructOutput>;

    getVestingSchedulesCount(overrides?: CallOverrides): Promise<BigNumber>;

    getVestingSchedulesCountByBeneficiary(
      _beneficiary: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getVestingSchedulesTotalAmount(
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getWithdrawableAmount(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<string>;

    release(
      vestingScheduleId: BytesLike,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    revoke(
      vestingScheduleId: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    setCurrentTime(
      _time: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    transferOwnership(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;

    withdraw(amount: BigNumberish, overrides?: CallOverrides): Promise<void>;
  };

  filters: {
    "OwnershipTransferred(address,address)"(
      previousOwner?: string | null,
      newOwner?: string | null
    ): OwnershipTransferredEventFilter;
    OwnershipTransferred(
      previousOwner?: string | null,
      newOwner?: string | null
    ): OwnershipTransferredEventFilter;

    "Released(uint256)"(amount?: null): ReleasedEventFilter;
    Released(amount?: null): ReleasedEventFilter;

    "Revoked()"(): RevokedEventFilter;
    Revoked(): RevokedEventFilter;
  };

  estimateGas: {
    computeNextVestingScheduleIdForHolder(
      holder: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    computeReleasableAmount(
      vestingScheduleId: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    computeVestingScheduleIdForAddressAndIndex(
      holder: string,
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    createVestingSchedule(
      _beneficiary: string,
      _start: BigNumberish,
      _cliff: BigNumberish,
      _duration: BigNumberish,
      _slicePeriodSeconds: BigNumberish,
      _revocable: boolean,
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    getLastVestingScheduleForHolder(
      holder: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getToken(overrides?: CallOverrides): Promise<BigNumber>;

    getVestingIdAtIndex(
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getVestingSchedule(
      vestingScheduleId: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getVestingScheduleByAddressAndIndex(
      holder: string,
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getVestingSchedulesCount(overrides?: CallOverrides): Promise<BigNumber>;

    getVestingSchedulesCountByBeneficiary(
      _beneficiary: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getVestingSchedulesTotalAmount(
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getWithdrawableAmount(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    release(
      vestingScheduleId: BytesLike,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    revoke(
      vestingScheduleId: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setCurrentTime(
      _time: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    withdraw(
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    computeNextVestingScheduleIdForHolder(
      holder: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    computeReleasableAmount(
      vestingScheduleId: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    computeVestingScheduleIdForAddressAndIndex(
      holder: string,
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    createVestingSchedule(
      _beneficiary: string,
      _start: BigNumberish,
      _cliff: BigNumberish,
      _duration: BigNumberish,
      _slicePeriodSeconds: BigNumberish,
      _revocable: boolean,
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    getLastVestingScheduleForHolder(
      holder: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getToken(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getVestingIdAtIndex(
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getVestingSchedule(
      vestingScheduleId: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getVestingScheduleByAddressAndIndex(
      holder: string,
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getVestingSchedulesCount(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getVestingSchedulesCountByBeneficiary(
      _beneficiary: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getVestingSchedulesTotalAmount(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getWithdrawableAmount(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    release(
      vestingScheduleId: BytesLike,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    revoke(
      vestingScheduleId: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setCurrentTime(
      _time: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    withdraw(
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
